export default function Label(props) {
      return (
            <label {...props} className={"cursor-pointer text-gray-700 dark:text-gray-300" + (props.className ? ` ${props.className}` : "")}>
                  {props.children}
            </label>
      )
}