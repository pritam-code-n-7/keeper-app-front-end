function Footer() {
  const date = new Date().getFullYear();
  return (
    
      <footer className="foot">
        Made by Pritam <br />
        copyright © {date}
      </footer>
    
  );
}

export default Footer;
