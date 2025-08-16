import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  useRef,
  useLayoutEffect,
  createContext,
} from "react";

// Criando um Context para demonstrar useContext
const ThemeContext = createContext();

// Componente principal
const HooksExample = () => {
  // useState - Estados básicos
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  // useRef - Referência para DOM
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  // useReducer - Estado complexo
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // useMemo - Otimização de cálculos
  const expensiveValue = useMemo(() => {
    console.log("Calculando valor caro...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, [age]); // Só recalcula quando age muda

  // useCallback - Otimização de funções
  const handleButtonClick = useCallback(() => {
    alert(`Olá, ${name || "visitante"}!`);
  }, [name]); // Só recria quando name muda

  // useLayoutEffect - Efeito síncrono
  useLayoutEffect(() => {
    renderCount.current += 1;
  });

  // Função para focar no input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Função para alternar tema
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Estilos baseados no tema
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#000000",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  const sectionStyle = {
    marginBottom: "30px",
    border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: theme === "dark" ? "#2a2a2a" : "#f9f9f9",
  };

  const buttonStyle = {
    padding: "8px 16px",
    marginRight: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: theme === "dark" ? "#4a4a4a" : "#007bff",
    color: theme === "dark" ? "#ffffff" : "#ffffff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const inputStyle = {
    marginRight: "10px",
    padding: "8px",
    border: `1px solid ${theme === "dark" ? "#444" : "#ccc"}`,
    borderRadius: "4px",
    backgroundColor: theme === "dark" ? "#333" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#000000",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={containerStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1>Exemplos dos Hooks Mais Usados no React</h1>
          <button 
            onClick={toggleTheme}
            style={{
              ...buttonStyle,
              backgroundColor: theme === "dark" ? "#ffc107" : "#343a40",
              color: theme === "dark" ? "#000000" : "#ffffff",
            }}
          >
            {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>
        </div>

        {/* Exemplo useState */}
        <section style={sectionStyle}>
          <h2>1. useState - Gerenciamento de Estado</h2>
          <div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
            <input
              type="number"
              placeholder="Digite sua idade"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              style={inputStyle}
            />
            <button onClick={focusInput} style={buttonStyle}>
              Focar no Input (useRef)
            </button>
          </div>
          <p>Nome: {name || "Não informado"}</p>
          <p>Idade: {age} anos</p>
          <p>Renders: {renderCount.current}</p>
        </section>

        {/* Exemplo useReducer */}
        <section style={sectionStyle}>
          <h2>2. useReducer - Estado Complexo</h2>
          <p>Contador: {state.count}</p>
          <button
            onClick={() => dispatch({ type: "increment" })}
            style={buttonStyle}
          >
            Incrementar
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            style={buttonStyle}
          >
            Decrementar
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            style={buttonStyle}
          >
            Resetar
          </button>
        </section>

        {/* Exemplo useMemo */}
        <section style={sectionStyle}>
          <h2>3. useMemo - Otimização de Cálculos</h2>
          <p>Valor calculado (caro): {expensiveValue}</p>
          <p>
            <em>Abra o console para ver quando o cálculo é executado</em>
          </p>
        </section>

        {/* Exemplo useCallback */}
        <section style={sectionStyle}>
          <h2>4. useCallback - Otimização de Funções</h2>
          <button
            onClick={handleButtonClick}
            style={buttonStyle}
          >
            Cumprimentar (useCallback)
          </button>
          <p>
            <em>A função só é recriada quando o nome muda</em>
          </p>
        </section>

        {/* Exemplo useContext */}
        <ContextExample />

        {/* Controle de visibilidade para demonstrar useEffect cleanup */}
        <section style={sectionStyle}>
          <h2>5. useEffect - Efeitos Colaterais</h2>
          <button
            onClick={() => setIsVisible(!isVisible)}
            style={buttonStyle}
          >
            {isVisible ? "Ocultar" : "Mostrar"} Componente
          </button>
          {isVisible && <EffectExample />}
          <p>
            <em>Abra o console para ver os logs dos efeitos</em>
          </p>
        </section>
      </div>
    </ThemeContext.Provider>
  );
};

// Componente para demonstrar useContext
const ContextExample = () => {
  const themeContext = useContext(ThemeContext);

  const sectionStyle = {
    marginBottom: "30px",
    border: `1px solid ${themeContext.theme === "dark" ? "#444" : "#ccc"}`,
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: themeContext.theme === "dark" ? "#2a2a2a" : "#f9f9f9",
  };

  return (
    <section style={sectionStyle}>
      <h2>6. useContext - Compartilhamento de Estado</h2>
      <p>Tema atual: {themeContext?.theme || "Não definido"}</p>
      <p>
        <em>Este valor vem do contexto pai sem precisar passar props</em>
      </p>
    </section>
  );
};

// Componente para demonstrar useEffect
const EffectExample = () => {
  useEffect(() => {
    console.log("Componente EffectExample montado");
    
    return () => {
      console.log("Componente EffectExample desmontado (cleanup)");
    };
  }, []);

  return (
    <div style={{ marginTop: "10px", padding: "10px", border: "1px dashed #ccc" }}>
      <p>Este componente demonstra useEffect com cleanup</p>
    </div>
  );
};

export default HooksExample;
