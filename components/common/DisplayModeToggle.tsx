"use client";
import React from 'react';
import IconToggleButton from './IconToggleButton';
import { useAppContext } from '../providers/AppStateContext';
import { DesktopIcon, TerminalIcon } from '../icons';

const DisplayModeToggle = () => {
    const { showTerminal, setShowTerminal } = useAppContext();

    return (
        <IconToggleButton
            isOn={showTerminal}
            onToggle={() => setShowTerminal(!showTerminal)}
            onIcon={<TerminalIcon size={24} />}
            offIcon={<DesktopIcon size={24} />}
            ariaLabel={showTerminal ? "Switch to UI Page" : "Switch to Terminal"}
        />
    );
}

export default DisplayModeToggle;