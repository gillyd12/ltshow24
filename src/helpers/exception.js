export default function exception() {
    function AuthenticationException(e) {
      const message = e.message;
      const name = 'AuthenticationException';
      console.log(name + ' - ' + message)
    }
  
    function DataException(e) {
      const message = e.message;
      const name = 'DataException';
      console.log(name + ' - ' + message)
    }
  
    return { AuthenticationException, DataException };
  }
  