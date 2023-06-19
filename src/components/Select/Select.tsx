import { cn } from '@bem-react/classname';

import './Select.scss';
import { Icons } from 'assets';
import { useCallback, useState } from 'react';

const CnSelect = cn('select');

interface SelectItem {
    title: string;
    icon: any;
    value?: any;
}

interface ISelectProps {
    selectedItem: SelectItem;
    items: SelectItem[];
    itemClickHandler?: (item: SelectItem) => void;
}

export const Select: React.FC<ISelectProps> = ({
    items,
    selectedItem,
    itemClickHandler,
}) => {
    const [isDropdownShow, setIsDropdownShow] = useState(false);

    const isDropdownShowChangeCallback = useCallback(() => {
        setIsDropdownShow((prev) => !prev);
    }, []);

    const itemClickCallback = useCallback(
        (value: SelectItem) => {
            return () => {
                isDropdownShowChangeCallback();

                if (itemClickHandler) {
                    itemClickHandler(value);
                }
            };
        },
        [itemClickHandler, isDropdownShowChangeCallback],
    );

    return (
        <div className={CnSelect('wrapper')}>
            <div onClick={isDropdownShowChangeCallback} className={CnSelect()}>
                <div className={CnSelect('token')}>
                    <div className={CnSelect('token-icon')}>
                        {selectedItem.icon}
                    </div>
                    <div className={CnSelect('token-name')}>
                        {selectedItem.title}
                    </div>
                </div>
                <div className={CnSelect('action')}>
                    <Icons.AngleDown />
                </div>
            </div>
            <div className={CnSelect('dropdown', { show: isDropdownShow })}>
                {items.map((item) => (
                    <div
                        key={item.title}
                        onClick={itemClickCallback(item)}
                        className={CnSelect('token')}
                    >
                        <div className={CnSelect('token-icon')}>
                            {item.icon}
                        </div>
                        <div className={CnSelect('token-name')}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
