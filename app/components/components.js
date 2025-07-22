// components/components.js
const defaultChange = () => {
    alert('value Changed!');
}
// import '../../styles/globals.css';



function RadioBtn({name, label, value, selected, onChange}) {

    return (
        <label
            className="flex items-center space-x-2 cursor-pointer m-2 rounded bg-[var(--primary)] m-2 p-1 pr-4 pl-4 rounded-full"
            >
            <input
                type="radio"
                name={name}
                value={value}
                checked={selected}
                onChange={onChange?onChange:defaultChange}
                className="hidden"
            />
            <span >{label}</span>
        </label>
    )
}

function CheckboxBtn({name, label, value, checked, onChange, className}) {
    return (
        <label
            className="flex items-center space-x-2 m-2 p-1 pr-4 pl-4 rounded-full cursor-pointer bg-[var(--primary)]"
            >
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange ? onChange : defaultChange}
                className="hidden"
            />
            <span>{label}</span>
        </label>
    )
}

function Card({ title = '제목 없음', children = '내용 없음' }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function Header({ text = '헤더입니다' }) {
  return <header><h1>{text}</h1></header>;
}

// ✅ 마지막에 한 번에 export
export {
    RadioBtn,
    CheckboxBtn,
    Card,
    Header };
