import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckboxGroup from './checkbox-group';

describe('CheckboxGroup component', () => {
  const options = [
    { key: 'key1', value: 'value1' },
    { key: 'key2', value: 'value2' },
    { key: 'key3', value: 'value3' },
  ];
  const label = 'Checkbox Group';

  test('Should toggle check state when clicked', async () => {
    const onChangeMock = jest.fn();
    render(<CheckboxGroup options={options} onChange={onChangeMock} />);

    const allCheckboxes = screen.getAllByRole('checkbox');
    const firstCheckbox = allCheckboxes[0];
    const secondCheckbox = allCheckboxes[1];
    const thirdCheckbox = allCheckboxes[2];

    await userEvent.click(firstCheckbox);

    expect(firstCheckbox).toBeChecked();
    expect(secondCheckbox).not.toBeChecked();
    expect(thirdCheckbox).not.toBeChecked();

    await userEvent.click(firstCheckbox);
    await userEvent.click(secondCheckbox);

    expect(firstCheckbox).not.toBeChecked();
    expect(secondCheckbox).toBeChecked();
    expect(thirdCheckbox).not.toBeChecked();

    expect(onChangeMock).toHaveBeenCalledTimes(3);
  });

  test('Should show error when error prop is passed', () => {
    render(
      <CheckboxGroup
        options={options}
        onChange={jest.fn()}
        error={{ type: '', message: 'error message' }}
      />,
    );

    expect(screen.getByText('error message')).toBeInTheDocument();
  });

  test('Should show header when label prop is passed', () => {
    render(
      <CheckboxGroup options={options} onChange={jest.fn()} label={label} />,
    );

    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
    expect(h3Element).toHaveTextContent(label);
  });
});
