import { cn } from '@bem-react/classname';
import { Icons } from 'assets';

import './Input.scss';

const CnInput = cn('input');

interface IInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    view: 'dark';
    inputSize: 'm' | 'l';
}

export const Input: React.FC<IInputProps> = ({ view, inputSize, ...props }) => {
    return <input {...props} className={CnInput({ view, size: inputSize })} />;
};
