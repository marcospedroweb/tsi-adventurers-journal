import React from 'react';
import styles from './EditUserLabel.module.css';
import { BsCheck2, BsPencilFill } from 'react-icons/bs';
import { GlobalContext } from '../Context/GlobalStorage';
import GhostInputCustom from './GhostInputCustom';

const EditUserLabel = ({ title, data, form }) => {
  const { session, setSession } = React.useContext(GlobalContext);
  const [editing, setEditing] = React.useState(false);
  const [imageName, setImageName] = React.useState('Imagem');
  const [dataInput, setDataInput] = React.useState(data || 'Não adicionado');
  const [type, setType] = React.useState('');

  React.useEffect(() => {
    switch (title) {
      case 'Nome Completo':
        setType('text');
        break;
      case 'Email':
        setType('email');
        break;
      case 'Senha':
        setType('password');
        break;
      case 'Telefone':
        setType('tel');
        break;
      case 'Banner':
        setType('file');
        setDataInput('');
        break;
      case 'Foto de perfil':
        setType('file');
        setDataInput('');
        break;
      default:
        return '';
    }
  }, [dataInput, form.validation, title]);

  return (
    <div className={`${styles.divMain} col-12 col-lg-6`}>
      <div className={`${styles.divLabel} ${editing ? styles.editing : ''}`}>
        <h3>{title}</h3>
        <div className="d-flex justify-content-between align-items-center">
          <p className={`${editing ? 'd-none' : ''}`}>
            {type === 'file'
              ? imageName
              : dataInput
              ? dataInput
              : 'Não Adicionado'}
          </p>
          <div
            className={`${
              editing ? styles.show : 'd-none'
            } d-flex justify-content-between align-items-center w-100`}
          >
            <GhostInputCustom
              type={type}
              classN={editing ? styles.show : 'd-none'}
              refComponent={form.ref}
              data={dataInput}
              {...form.validation}
            />
            <div
              className={`${styles.divOk} ${editing ? styles.show : 'd-none'}`}
              onClick={() => {
                setEditing(!editing);
                if (type === 'file')
                  setImageName(form.validation.value.split('\\').pop());
              }}
            >
              <BsCheck2 size={'24px'} color="#87FAD1" />
            </div>
          </div>
          <div
            className={`${editing ? 'd-none' : ''} ${styles.divEdit}`}
            onClick={() => {
              setEditing(!editing);
            }}
          >
            <BsPencilFill color="#585858" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserLabel;
