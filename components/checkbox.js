export default function Checkbox(props) {
      return (
            <input type="checkbox" {...props} className={"rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:text-blue-500 dark:focus:ring-blue-400" + (props.className ? ` ${props.className}` : "")} />
      )
}

