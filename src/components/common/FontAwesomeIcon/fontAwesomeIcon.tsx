import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FontAwesomeProps {
    icon: IconDefinition;
    className?: string;
    onClick?: () => void;
}

const FontAwesomeIconComp: React.FC<FontAwesomeProps> = ({
    icon,
    className = '',
    onClick,
}) => {
    return (
        <FontAwesomeIcon
            icon={icon}
            className={className}
            onClick={onClick}
        />
    );
};

export default FontAwesomeIconComp;
