'use client';

import { useLazyQuery, useQuery } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { SyntheticEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { SEARCH_DOG } from '@/app/api/graphql/queries';
import InputSearch from '@/lib/input-search/input-search';
import Spinner from '@/lib/spinner/spinner';
import { Dog } from '@/types/dog';
import { searchDogSchema } from '@/utils/validation-schemas';

import { DEBOUNCE_SEARCH_DELAY } from '../../utils/constants';
import styles from './info-dog.module.scss';

type FormInputs = {
  searchDogName: string;
};

type InfoDogProps = {
  id?: string;
};

export default function InfoDog({ id = '' }: InfoDogProps) {
  // for searched dog (on page load)
  const { data: urlData, loading: isDogLoading } = useQuery<{ dogs: Dog[] }>(
    SEARCH_DOG,
    {
      variables: { name: id[0] },
    }
  );

  // for input search
  const [query, { data: searchedData, loading: isSearchLoading }] =
    useLazyQuery<{
      dogs: Dog[];
    }>(SEARCH_DOG, {
      variables: { name: id[0] },
    });

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(searchDogSchema),
  });

  const watchDogName = watch('searchDogName');
  const [debouncedWatchDogName] = useDebounce(
    watchDogName,
    DEBOUNCE_SEARCH_DELAY
  );

  useEffect(() => {
    if (searchDogSchema.isValidSync({ searchDogName: debouncedWatchDogName })) {
      query({
        variables: { name: debouncedWatchDogName },
      });
    }
  }, [debouncedWatchDogName, query]);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const {
    name,
    image_link,
    energy,
    min_life_expectancy,
    good_with_strangers,
    good_with_other_dogs,
  } = urlData?.dogs?.[0] || {};

  return (
    <section className={styles.infoDog}>
      <h1 className={styles.title}>Info dog</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="searchDogName" className={styles.label}>
            Search dog by name
          </label>
          <InputSearch
            {...register('searchDogName')}
            id="searchDogName"
            type="text"
            options={searchedData?.dogs || []}
            loading={isSearchLoading}
            linkPropName="name"
          />
          {errors.searchDogName && <p>{errors.searchDogName.message}</p>}
        </div>
      </form>

      {isDogLoading && <Spinner size={100} />}

      <div className={styles.dog}>
        {urlData?.dogs && !urlData.dogs.length && (
          <div className={styles.notFound}>
            <span className={styles.notFoundCode}>404</span> Dog not found :(
          </div>
        )}
        {urlData?.dogs && urlData.dogs.length > 0 && (
          <>
            <div className={styles.imageWrapper}>
              <Image
                src={image_link || ''}
                alt={name || ''}
                width={750}
                height={500}
                className={styles.image}
              />
              <h2 className={styles.dogName}>{name}</h2>
            </div>

            <p className={styles.param}>Energy: {energy}</p>
            <p className={styles.param}>
              Min Life Expectancy: {min_life_expectancy}
            </p>
            <p className={styles.param}>
              Good with Strangers: {good_with_strangers}
            </p>
            <p className={styles.param}>
              Good with Other Dogs: {good_with_other_dogs}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
