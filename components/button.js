export default function Button(props) {
    const {
        children,
        variant = 'default',
        size = 'base',
        className = '', ...rest
    } = props;

    const base =
      'inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 transition-colors';

    const variants = {
        // Light: sfondo bianco, testo nero, hover grigio chiaro
        // Dark: sfondo bianco, testo nero, hover grigio molto chiaro
        default: 'bg-white text-black hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-200',

        // Outline visibile in entrambe le modalità
        outline: 'bg-transparent text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800',

        // Ghost: trasparente con hover discreto
        ghost: 'bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
    };

    const sizes = {
        xs: 'text-xs px-2 py-1',
        sm: 'text-xs px-3 py-1.5',
        base: 'text-base px-4 py-2',
        large: 'text-lg px-4 py-2',
    };

    return (
        <button
            {...rest}
            className={`${base} ${variants[variant] ?? variants.default} ${sizes[size] ?? sizes.base} ${className}`}
        >
            {children}
        </button>
    );
}