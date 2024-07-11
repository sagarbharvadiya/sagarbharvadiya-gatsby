import './styles.css';
import "./src/styles/global.css";

export const onClientEntry = () => {
  // Include Font Awesome CSS
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  fontAwesomeLink.integrity = 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==';
  fontAwesomeLink.crossOrigin = 'anonymous';
  fontAwesomeLink.referrerPolicy = 'no-referrer';
  document.head.appendChild(fontAwesomeLink);

  // Include Bootstrap CSS
  const bootstrapLink = document.createElement('link');
  bootstrapLink.rel = 'stylesheet';
  bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
  bootstrapLink.integrity = 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65';
  bootstrapLink.crossOrigin = 'anonymous';
  document.head.appendChild(bootstrapLink);

};
