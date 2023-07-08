import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("");

	return (
		<ThemeContext.Provider
			value={{
				theme,
				choiceTheme: (theme) => setTheme(theme),
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);