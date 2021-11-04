const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/ViniciusAbdon09"
            target="_blank"
            rel="noreferrer"
          >
            Vinícius Abdon
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Entre em contato:{" "}
            <a
              href="https://www.linkedin.com/in/vinicius-abdon/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
