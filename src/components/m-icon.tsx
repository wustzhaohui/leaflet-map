import React, { FC } from 'react';

export interface MIconProps {
    name: string;
    className?: string;
}

const MIcon: FC<MIconProps> = ({ className, name }) => {
    return (
        <svg className={`icon ${className}`} aria-hidden="true">
            <use xlinkHref={`#${name}`}></use>
        </svg>
    );
};
export default MIcon;
