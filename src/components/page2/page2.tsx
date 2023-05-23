import { SyntheticEvent } from 'react';
import { Access } from '../../models/access.model';
import { Menu } from '../menu/menu';
import { MenuOptions } from '../../types/menu.options';

export default function AddAccessData() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const personalDataInput = new Access(
      (form.elements.namedItem('username') as HTMLInputElement).value,
      (form.elements.namedItem('password') as HTMLInputElement).value,
      (form.elements.namedItem('accountType') as HTMLInputElement).value
    );
    console.log(personalDataInput);
  };

  const options: MenuOptions = [{ url: 'Page1', label: 'Atrás' }];

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div>
        <label htmlFor="password">Repeat Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div>
        <label htmlFor="account">Account type:</label>

        <select name="account" id="account">
          <option value="">Select</option>
          <option value="personal">Personal</option>
          <option value="pro">Pro</option>
          <option value="business">Business</option>
        </select>
      </div>
      <button>
        <Menu options={options}></Menu>
      </button>
      <button type="submit">Next</button>
    </form>
  );
}
