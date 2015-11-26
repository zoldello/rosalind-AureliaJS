
export function configure(aurelia) {  
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-computed');

  aurelia.start().then(a => a.setRoot('./src/rosalind'));
}