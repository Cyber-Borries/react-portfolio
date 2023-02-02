function App() {
  const mousePosition = useMousePosition();

  return (
    <p>
      Your cursor position:
      <br />
      {JSON.stringify(mousePosition)}
    </p>
  );
}


  return mousePosition;
};

render(
  <App />
);