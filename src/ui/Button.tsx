import React from 'react';

interface ButtonProps {
    variant?: "solid" | "outline" | "ghost";
    colors?: "primary" | "secondary";
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    text: string;
    icon?: React.ReactNode; // Icon component or element
    disabled?: boolean;
    className?: string;
    onClick: () => void;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ loading = false, fullWidth, variant = "solid", size, colors = "primary", text, icon, disabled = false, onClick, className }) => {

    // Determine size classes
    let sizeClasses = '';
    switch (size) {
        case 'small':
            sizeClasses = 'py-1 px-2 text-sm';
            break;
        case 'medium':
            sizeClasses = 'py-2 px-4 text-base';
            break;
        case 'large':
            sizeClasses = 'py-3 px-6 text-lg';
            break;
        default:
            sizeClasses = 'py-2 px-4 text-base';
    }

    // Determine variant classes
    let variantClasses = '';
    switch (variant) {
        case 'solid':
            variantClasses = `bg-${colors} text-white hover:bg-opacity-90`;
            break;
        case 'outline':
            variantClasses = `border border-${colors} text-${colors} hover:bg-${colors} hover:text-white`;
            break;
        case 'ghost':
            variantClasses = `text-${colors} hover:underline`;
            break;
        default:
            variantClasses = `bg-${colors} text-white hover:bg-opacity-90`;
    }

    // Full width button
    const fullWidthClass = fullWidth ? 'w-full' : '';

    // Disabled state
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    // Combining Tailwind classes with custom classes
    const customClass = `
        ${fullWidthClass}
        ${sizeClasses}
        ${variantClasses}
        ${disabledClass}
        ${className}
    `;

    return (
        <button
            onClick={onClick}
            className={`rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-${colors} transition-all duration-300 flex items-center justify-center space-x-2 ${customClass}`}
            disabled={disabled || loading}
        >
            {
                loading ? <div className='loading'>

                </div> : <>
                    {icon && <span className="">{icon}</span>}
                    <span>{text}</span>
                </>
            }
        </button>
    );
};

export default Button;
