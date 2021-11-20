import st from '../styles/MenuItem.css'
const MenuItem = ({ img, title, name }) => {
  return (
    <div>
      <div className="menuItem">
       <div><img src={img} alt="" /></div> 
        <h1>{title}</h1>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default MenuItem;
