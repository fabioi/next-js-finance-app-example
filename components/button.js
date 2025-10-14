export default function Button(props) {
    const {
        children,
        variant = 'default',
        size = 'base',
        className = '', ...rest
    } = props;

    const variants = {
        default: 'bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-200',
        outline: 'border border-gray-300 dark:boder-gray-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500',
        ghost: 'rounded-md bg-white hover:bg-grey-300 dark:bg-black dark:hover:bg-gray-500',

    };
    const sizes = {
        base: 'text-base px-4 py-2',
    };

    return (
        <button
            {...rest}
            className={`${variants[variant] ?? variants.default} ${sizes[size] ?? sizes.base} ${className}`}
        >
            {children}
        </button>
    );
}