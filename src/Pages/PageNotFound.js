import React from 'react';

const PageNotFound = () => {
  React.useEffect(() => {
    window.document.title = "Adventurer's Journal | Pagina não encontrada";
    return () => {
      // Restaurar o título original quando o componente for desmontado
      window.document.title = "Adventurer's Journal";
    };
  }, []);
  return (
    <main className="container-xl" style={{ height: '80vh' }}>
      <div className="d-flex justify-content center align-items-center  h-100">
        <div className="w-100 text-center">
          <h2 className="text-center fw-bold" style={{ fontSize: '10rem' }}>
            404
          </h2>
          <p className="fs-4">Pagina não encontrada</p>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
