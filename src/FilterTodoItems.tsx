type Props = {
  selected: string;
  handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement>
}

export function FilterTodoItems(props: Props) {
  const { selected, handleChangeSelect } = props;
  const optionsOnSelect = [
    { label: '全て', value: 'all'},
    { label: '完了', value: 'completed'},
    { label: '未完了', value: 'incompleted'},
  ]
  
  return (
    <select value={selected} onChange={handleChangeSelect}>
      {optionsOnSelect.map(option => (
        <option value={option.value} key={option.value}>{option.label}</option>
      ))}
    </select>
  )
}
