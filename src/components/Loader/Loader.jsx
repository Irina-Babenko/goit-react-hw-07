import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loader}>
        <div className={css.spinner}></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
