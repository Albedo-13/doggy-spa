'use client';

export default function InfoDogForm() {
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form>
      <input type="text" />
      <button>search</button>
    </form>
  );
}
