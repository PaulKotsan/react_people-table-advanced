import { Link } from 'react-router-dom';
import { PersonLinkProps } from '../types/props';

export const PersonLink = ({ person, name }: PersonLinkProps) => {
  if (person) {
    switch (person.sex) {
      case 'm':
        return <Link to={`/people/${person.slug}`}>{person.name}</Link>;
      case 'f':
        return (
          <Link to={`/people/${person.slug}`} className="has-text-danger">
            {person.name}
          </Link>
        );
    }
  }

  if (name) {
    return <>{name}</>;
  }

  return <>-</>;
};