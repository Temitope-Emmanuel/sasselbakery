import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles"
import {DialogActions,IconButton,Box,Typography,Collapse} from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {chocobar,
  sprinkle,strawberry,cupcake,
  emojiCake,chocoCake} from "../assets/images"
import MoreIcon from '@material-ui/icons/MoreVert';
import {pink} from "@material-ui/core/colors"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  open:boolean;
  handleToggle():void
}
const useStyles = makeStyles((theme:Theme) => (
  createStyles({
    root:{
      maxWith:"350px",
      "& h2":{
        fontFamily: "Pacifico, cursive",
        textTransform:"capitalize",
        fontSize:"2em"
      },
      "& h6,h5":{
        [theme.breakpoints.up("sm")]:{
          fontSize:"2em !important"
        }
      }
    },
    optionContainer:{
      borderRadius:".5em",
      padding:".2em .5em",
      "& h6":{
        fontFamily: "Pacifico, cursive",
        textAlign:"center",
        fontSize:"1.5em",
        margin:".5em 0",
        marginTop:"1.5em",
        color:pink["A700"]
      },
      "& > div:first-child":{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:"1.5em",
        "& h5":{
          color:pink["A700"],
          fontSize:"1.5em",
          fontWeight:200,
          fontFamily: "Pacifico, cursive"
        },
        "& svg":{
          transform:"rotate(90deg)"
        }
      }
    },
    pastriesContainer:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
        flexWrap:"no-wrap",
        backgroundColor:pink[100],
        borderRadius:".5em",
      "& button":{
        height:"3.5em",
        width:"3.5em",
        "& > span":{
          height:"100%"
        },
        "& div":{
          backgroundPosition:'center',
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          borderRadius:"50%",
          boxShadow:`0px 0px 7px 2px ${pink["A200"]}`,
          width:"100%",
          height:"100%"
        },
      [theme.breakpoints.up("sm")]:{
          height:"5em",
          width:"5em",
        }
      }
    },
    extraContainer:{
      display:"flex",
      justifyContent:"space-between",
      flexDirection:"row",
      flexWrap:"wrap",
      width:"100%",
      border:`2px solid ${pink["A200"]}`,
      height:"25em",
      marginTop:".5em",
      borderRadius:".5em",
      [theme.breakpoints.up("sm")]:{
        height:"fit-content",
      },
      "& > div":{
        width:"50%",
        height:"50%",
        display:"flex",
        flexDirection:"column",
        padding:".5em",
        "& > svg":{
          alignSelf:"flex-end"
        },
        "& > div":{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          "& > div:first-child":{
            width:"4em",
            height:"4em",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            borderRadius:"50%",
            boxShadow:`0px 0px 7px 2px ${pink["A200"]}`,
            [theme.breakpoints.up("sm")]:{
              width:"7em",
              height:"7em",
            }
          },
          "& > *:nth-child(2)":{
            fontFamily: "Pacifico, cursive",
            color:pink[900],
            fontSize:"1.5em",
            margin:".2em 0",
            [theme.breakpoints.up("sm")]:{
              fontSize:"2.3em",
            }
          },
          "& > *:nth-child(3)":{
            opacity:".8",
            margin:".2em 0"
          }
        },
        "& button":{
          borderRadius:"2em",
        }
      },
      "& > div:first-child":{
        borderRight:`1px solid ${pink[100]}`,
        borderBottom:`1px solid ${pink[100]}`,
      },
      "& > div:nth-child(2)":{
        borderRight:`1px solid ${pink[100]}`,
        borderBottom:`1px solid ${pink[100]}`,
      },
      "& > div:nth-child(3)":{
        borderRight:`1px solid ${pink[100]}`,
      }
    }
  })
))

const AlertDialogSlide:React.FC<IProps> = ({open,handleToggle}) =>  {
  const classes = useStyles()
  const [openSelection,setOpenSelection ] = React.useState(false)
  const handleSelection = () => {
    setOpenSelection(!openSelection)
  }

  return (
      <Dialog fullWidth={true} maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted className={classes.root}
        onClose={handleToggle}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Order Now</DialogTitle>
        <DialogContent>
          <Box className={classes.optionContainer}>
            <Box>
              <Typography variant="h5">
                Select Kind of Pastries
              </Typography>
              <MoreIcon/>
            </Box>
            <Box className={classes.pastriesContainer}>
              <IconButton onClick={handleSelection}>
                <Box style={{
                  backgroundImage:`url(${chocoCake})`
                }} />
              </IconButton>
              <IconButton onClick={handleSelection}>
                <Box style={{
                  backgroundImage:`url(${emojiCake})`
                }} />
              </IconButton>
              <IconButton onClick={handleSelection}>
                <Box style={{
                  backgroundImage:`url(${cupcake})`
                }} />
              </IconButton>
            </Box>
            <Collapse in={openSelection}>
              <Typography variant="subtitle2" >
                Add Special Topping
              </Typography>
              <Box className={classes.extraContainer}>
                <Box>
                  <MoreIcon/>
                  <Box>
                    <Box style={{
                      backgroundImage:`urL(${sprinkle})`,
                      backgroundRepeat:"no-repeat"
                    }} />
                    <Typography>
                      Sprinkles
                    </Typography>
                    <Typography>
                      {new Intl.NumberFormat('en-US', {style:"currency",currency:"NGN"}).format(300)}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <MoreIcon/>
                  <Box>
                    <Box style={{
                      backgroundImage:`url(${strawberry})`,
                      backgroundRepeat:"no-repeat"
                    }} />
                    <Typography>
                      Strawberry
                    </Typography>
                    <Typography>
                      {new Intl.NumberFormat('en-US', {style:"currency",currency:"NGN"}).format(300)}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <MoreIcon/>
                  <Box>
                    <Box style={{
                      backgroundImage:`url(${chocobar})`,
                      backgroundRepeat:"no-repeat"
                    }} />
                    <Typography>
                      Chocolate
                    </Typography>
                    <Typography>
                      {new Intl.NumberFormat('en-US', {style:"currency",currency:"NGN"}).format(300)}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <MoreIcon/>
                  <Box>
                    <Box style={{
                      backgroundImage:`url(${cupcake})`,
                      backgroundRepeat:"no-repeat"
                    }} />
                    <Typography>
                      Sprinkles
                    </Typography>
                    <Typography>
                      {new Intl.NumberFormat('en-US', {style:"currency",currency:"NGN"}).format(300)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Collapse>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggle} color="primary">
            Cancel Order
          </Button>
          <Button onClick={handleToggle} color="primary">
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
  );
}


export default AlertDialogSlide