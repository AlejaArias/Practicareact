import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import config from '../config.json';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Ejemplo() {
  const classes = useStyles();
  const [numeroInicial, setNumeroInicial] = useState(0,0);
  const [valorActual, setValorActual] = useState('');
  const [flag, setFlag] = useState(false);
  const [opcActual, setOpcActual] = useState('');

   function handleClickOperacion(op){

     switch (op){

       case config.SUMA:
          setFlag(true);
          setOpcActual(config.SUMA);
        if(numeroInicial === 0){
          setNumeroInicial(parseFloat(valorActual));
          console.log("ENTRO");
        } else {
          setValorActual(numeroInicial + parseFloat(valorActual));
          setNumeroInicial(numeroInicial + parseFloat(valorActual));        
          console.log("valor Actual ->" + config.SUMA);
          console.log("OPC Actual ->" + opcActual);
        }
       break;

       case config.RESTA:
        setFlag(true);
        if(numeroInicial === 0){
          setNumeroInicial(parseFloat(valorActual));
        } else {
          setValorActual(numeroInicial - parseFloat(valorActual));
          setNumeroInicial(numeroInicial - parseFloat(valorActual));
          setOpcActual(config.RESTA);
        }
       break

       case config.DIVISION:
        setFlag(true);
        if(numeroInicial === 0){
          setNumeroInicial(parseFloat(valorActual));
        } else {
          setValorActual(numeroInicial / parseFloat(valorActual));
         // console.log("valor Actual ->" + valorActual);
        //console.log("Numero Inicial ->" + numeroInicial);
          setNumeroInicial(numeroInicial / parseFloat(valorActual));
          setOpcActual(config.DIVISION);
        }
        
       break;

       case config.MULTIPLICACION:
        setFlag(true);
        if(numeroInicial === 0){
          setNumeroInicial(parseFloat(valorActual));
        } else {
          setValorActual(numeroInicial * parseFloat(valorActual));
          setNumeroInicial(numeroInicial * parseFloat(valorActual));
          setOpcActual(config.MULTIPLICACION);
        }
       break;

       case config.IGUAL:
        setFlag(true);
        if(opcActual === "+"){
          setValorActual(numeroInicial + parseFloat(valorActual));
          setNumeroInicial(numeroInicial + parseFloat(valorActual));
          setOpcActual(" ");
        } 
        if(opcActual === "-"){
          setValorActual(numeroInicial - parseFloat(valorActual));
          setNumeroInicial(numeroInicial - parseFloat(valorActual));
          setOpcActual(" ");
        } 
        if(opcActual === "*"){
          setValorActual(numeroInicial * parseFloat(valorActual));
          setNumeroInicial(numeroInicial * parseFloat(valorActual));
          setOpcActual(" ");
          
        } 
        if(opcActual === "/"){
          setValorActual(numeroInicial / parseFloat(valorActual));
           setNumeroInicial(numeroInicial / parseFloat(valorActual));
           setOpcActual(" ");
        } 
        if(opcActual === "%"){
          setValorActual(numeroInicial % parseFloat(valorActual));
           setNumeroInicial(numeroInicial % parseFloat(valorActual));
           setOpcActual(" ");
        } 


       break;

       case config.LIMPIAR:
        
        setValorActual(0);
       break;

       case config.LIMPIARTODO:
        
        setValorActual(0);
        setNumeroInicial(0);
       break;

       default:
        console.log("valor Actual ->" + valorActual);
        console.log("Numero Inicial ->" + numeroInicial);
        break;

     }

   }



   function handleClickFlecha(tecla) {
    if(!flag){
      setValorActual(valorActual + tecla);
    } else {
      setValorActual(tecla);
      setFlag(false);
    }
    
  }


   return (
    
    <div className="calculator-body"> 
     
    <div className={classes.margin}>
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item>
          
          </Grid>
          <Grid item >
            <TextField id="input-with-icon-grid" label="Resultado" value={valorActual} />
          </Grid>
        </Grid>
      </div>
      
        <Grid container spacing={3}  >
          
        <Grid item xs={3} >
            <Button
             onClick={()=>handleClickOperacion("AC")}
              name="AC"
              variant="outlined" color="secondary"
              size="small"
              className={classes.button}
            >
              AC
              </Button>
      </Grid>

      <Grid item xs={3} >
            <Button
             onClick={()=>handleClickOperacion("CE")}
              name="CE"
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
            >
              CE
            </Button>
          </Grid>
          
          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickOperacion("%")}
              name="%"
              variant="outlined" color="primary"
              className={classes.button}
              //startIcon={<SaveIcon />}
            >
              %
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickOperacion("/")}
              name="/"
              variant="outlined" color="primary"
              className={classes.button}
              //startIcon={<SaveIcon />}
            >
              /
            </Button>
          </Grid>
          
          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("7")}
              name="7"
              variant="outlined" color="primary"             
              size="small"
              className={classes.button}
             >
              7
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("8")}
              name="8"
              variant="outlined" color="primary"           
              size="small"
              className={classes.button}
            >
              8
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("9")}
              name="9"
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
              
            >
              9
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickOperacion("X")}
              name="X"
              variant="outlined" color="primary"
              className={classes.button}
              //startIcon={<SaveIcon />}
            >
              X
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("4")}
              name="4"
              variant="outlined" color="primary"            
              size="small"
              className={classes.button}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("5")}
              name="5"
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
            >
              5
            </Button>
          </Grid>
          
          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("6")}
              name="6"
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickOperacion("-")}
              name="-"
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
            >
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("1")}
              name="1"
              variant="outlined" color="primary"
                size="small"
              className={classes.button}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("2")}
              name="2"
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("3")}
              name="3"
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={()=>handleClickOperacion("+")}
              name="+"
              variant="outlined" color="primary"
              size= "large"
              className={classes.button}
            >
              +
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickFlecha("0")}
              name="0"
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
            >
              0
            </Button>
          </Grid>

            <Grid item xs={3} >
            <Button
             onClick={()=>handleClickOperacion(".")}
              name="."
              variant="outlined" color="primary"
              size="small"
              className={classes.button}
            >
              .
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              onClick={()=>handleClickOperacion("=")}
              name="="
              variant="outlined" color="primary"
              className={classes.button}
              //startIcon={<SaveIcon />}
            >
              =
            </Button>
          </Grid>
          
        </Grid>

    </div>


  );
}
export default Ejemplo;