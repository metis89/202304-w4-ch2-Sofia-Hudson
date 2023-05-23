import { SyntheticEvent } from 'react';
import { Personal } from '../../models/personal.model';
import { Menu } from '../menu/menu';
import { MenuOptions } from '../../types/menu.options';

export default function AddPersonalData() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const personalDataInput = new Personal(
      (form.elements.namedItem('name') as HTMLInputElement).value,
      (form.elements.namedItem('lastName') as HTMLInputElement).value,
      (form.elements.namedItem('birth') as HTMLInputElement).value,
      (form.elements.namedItem('gender') as HTMLInputElement).value,
      (form.elements.namedItem('email') as HTMLInputElement).value
    );
    console.log(personalDataInput);
  };

  const options: MenuOptions = [{ url: 'Page2', label: 'Enviar' }];

  return (
    <main>
      <form aria-label="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div>
          <label htmlFor="birth">BirthDate</label>
          <input type="date" name="birth" id="birth" required />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
          <div>
            <input
              type="radio"
              id="nonmentioned"
              name="gender"
              value="nonmentioned"
            />
            <label htmlFor="nonmentioned">Prefer not to mention</label>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <label>
          <input type="checkbox"></input>Desea recibir información de nuestra
          newsletter?
        </label>

        <button type="submit">
          <Menu options={options}></Menu>
        </button>
      </form>
    </main>
  );
}
