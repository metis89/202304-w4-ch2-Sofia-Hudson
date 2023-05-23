import { MenuOptions } from '../../types/menu';
import { Link } from 'react-router-dom';

type PropsType = {
  options: MenuOptions;
};

export function Menu({ options }: PropsType) {
  return (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
