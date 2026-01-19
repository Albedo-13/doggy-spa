import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputSearch from './input-search';

describe('InputSearch component', () => {
  const options = [{ name: 'value1' }, { name: 'value2' }];

  test('Should be rendered', () => {
    render(<InputSearch options={[]} linkPropName="name" loading={false} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('Should show options if options are passed', async () => {
    render(
      <InputSearch options={options} linkPropName="name" loading={false} />,
    );
    // options list is open when at least 3 symbols are entered
    await userEvent.type(screen.getByRole('textbox'), '123');

    const optionsGroup = screen.getByTestId('input-search-show-options');
    expect(optionsGroup).toBeInTheDocument();

    const optionsItems = screen.getAllByRole('link');
    expect(optionsItems).toHaveLength(2);
  });

  test('Should show empty fallback on empty options array', async () => {
    render(<InputSearch options={[]} linkPropName="name" loading={false} />);
    await userEvent.type(screen.getByRole('textbox'), '123');

    const optionsGroup = screen.getByTestId('input-search-empty-options');
    expect(optionsGroup).toBeInTheDocument();

    const optionsItems = screen.queryAllByRole('link');
    expect(optionsItems).toHaveLength(0);
  });

  test('Should show loading fallback on empty options array', async () => {
    render(<InputSearch options={[]} linkPropName="name" loading={true} />);
    await userEvent.type(screen.getByRole('textbox'), '123');

    const optionsGroup = screen.getByTestId('input-search-loading-options');
    expect(optionsGroup).toBeInTheDocument();

    const optionsItems = screen.queryAllByRole('link');
    expect(optionsItems).toHaveLength(0);
  });
});
