import React from "react"
import Link from 'next/link'
import Navbar from "../components/Navbar"
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles"
import {Box,Button,Typography} from "@material-ui/core"
import {MainBg,MainBg2} from "../assets/images"
import {pink} from "@material-ui/core/colors"
// import Layout from '../components/Layout'

const useStyles = makeStyles((theme:Theme) => createStyles({
  root:{
    position:"relative",
    marginTop:"-1em",
    paddingTop:"1em",
    width:"100vw",
    overflowX:"hidden",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  mainView:{
    position:"relative",
    width:"100vw",
    height:"65vh",
    marginTop:"3.5em",
    backgroundImage:`url(${MainBg2})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    "& h5,p":{
      color:"whitesmoke"
    },
    "& h5":{
      fontFamily: "Pacifico, cursive",
      fontSize:"2.5em",
    },
    [theme.breakpoints.up("md")]:{
      height:"80vh"
    },
    "& > div:first-child":{
      position:"absolute",
      height:"100%",
      width:"100%",
      backgroundColor:"rgba(0,0,0,.3)"
    },
      "& > div:last-child":{
        position:"absolute",
        display:"none",
        marginLeft:"2.5%",
        paddingLeft:".5em",
        width:"80%",
        bottom:"25%",
        [theme.breakpoints.up("md")]:{
          top:"30%",
          width:"50%",
          display:"block"
        },
        "& > *:first-child":{
          marginBottom:".5em",
          fontSize:"2em",
          whiteSpace:"nowrap",
          [theme.breakpoints.up('md')]:{
            fontSize:"2.5em"
          }
        },
        "& > *:last-child":{
          fontSize:"1em",
          [theme.breakpoints.up("md")]:{
            fontSize:"1.5em"
          }
        }
      }
  },
  anotherMainView:{
    width:"100vw",
    height:"35vh",
    marginTop:"2em",
    backgroundImage:`url(${MainBg})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    filter:"grayscale(.7)",
    [theme.breakpoints.up("md")]:{
      height:"45vh",
      transition:"filter .3s ease-out",
      "&:hover":{
        filter:"grayscale(0)"
      }
    }
  },
  intro:{
    position:"relative",
    backgroundColor:pink["A700"],
    padding:"1em",
    textAlign:"center",
    height:"max-content",
    width:"80vw",
    borderRadius:"1em",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"0 auto",
    flexDirection:"column",
    zIndex:5,
    border:`1px solid ${pink["A700"]}`,
    transform:"translateY(-60%)",
    "& > button":{
      marginTop:"1em",
      borderRadius:"5em",
      border:`1px solid ${pink[500]}`,
      padding:".5em 2.4em",
      transform:"translateY(85%)" 
    },
    "& span":{
      fontSize:"1em",
      fontWeight:400
    },
    "& > h5":{
      display:"none"
    },
    [theme.breakpoints.up("md")]:{
      "& > h5":{
        display:"block",
        margin:"1em 0",
        textTransform:"capitalize",
        fontFamily: "Pacifico, cursive",
        fontSize:"2em",
      },
      maxWidth:"50em",
      width:"50vw",
      height:"25em",
      "& span":{
        fontSize:"1.3em",
      },
      "& > button":{
        padding:"1em 3em",
        textTransform:"capitalize",
        transform:"translateY(40%)" 
      }
    }
  },
  mediaSection:{
    "& > div":{
      margin:"12em 0"
    },
    "& > div:first-child":{
      marginTop:"0"
    },
    "& > div:nth-child(2)":{
      [theme.breakpoints.up("sm")]:{
        flexDirection:"row-reverse !important",
        "& > *:first-child":{
          marginLeft:"2.5em"
        }
      }
    }
  },
  mediaContainer:{
    backgroundColor:pink["A700"],
    border:`1px solid ${pink["A700"]}`,
    borderRadius:".5em",
    display:"flex",
    alignItems:"center",
    margin:"0 2em",
    flexDirection:"column-reverse",
    maxHeight:"22em",
    maxWidth:"75em",
    "& button":{
      marginTop:"1.5em",
      borderRadius:"5em",
      border:`1px solid ${pink[500]}`,
      padding:".5em 2.4em",
      // fontFamily: "Pacifico, cursive",
      // textTransform:"capitalize"
    },
    "& span":{
      fontSize:"1em",
      fontWeight:400
    },
    [theme.breakpoints.up("sm")]:{
      flexDirection:"row"
    },
    "& > div:first-child":{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      padding:".3em .6em",
      "& > *:first-child":{
        fontFamily: "Pacifico, cursive",
        margin:".5em 0"
      },
      [theme.breakpoints.up("sm")]:{
        width:"50%"
      }
    },
    "& > div:nth-child(2)":{
      width:"75vw",
      borderRadius:"1em",
      height:"14em",
      backgroundPosition:"center",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      marginTop:"-25%",
      [theme.breakpoints.up("sm")]:{
        height:"43vh",
        width:"60%",
        marginTop:"0%",
        marginRight:"-4%"
      },
      [theme.breakpoints.up("md")]:{
        height:"60vh",
        border:`1px solid ${pink["A700"]}`,
      }
    }
  },
  starProduct:{
    margin:"0 .5em",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    "& > div:first-child":{
      backgroundPosition:"center",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      display:"none",
      [theme.breakpoints.up("sm")]:{
        display:"block",
        width:"45%",
        height:"60em",
        marginRight:"1%"
      }
    },
    [theme.breakpoints.up("sm")]:{
      flexDirection:"row",
      "& > div:nth-child(2)":{
        width:"54%"
      }
    }
  },
  imageLabel:{
    display:"flex",
    border:`2px solid ${pink[100]}`,
    paddingBottom:"2em",
    borderRadius:".3em",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    [theme.breakpoints.up("sm")]:{
      flexDirection:"row",
      paddingBottom:0,
      alignItems:"flex-start"
    },
    "& > div:first-child":{
      width:"100%",
      height:"40vh",
      backgroundPosition:"top",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      [theme.breakpoints.up("sm")]:{
        height:"40em",
        flex:1
      }
    },
    "& > div:nth-child(2)":{
      position:"absolute",
      top:0,
      left:0,
      backgroundColor:pink[300],
      color:"black",
      padding:".5em 1em"
    },
    "& > div:last-child":{
      paddingLeft:".5em",
      [theme.breakpoints.up("sm")]:{
        width:"45%"
      },
      "& > *:first-child":{
        fontFamily: "Pacifico, cursive",
        textTransform:"capitalize",
        fontSize:"1.7em"
      },
      "& > *:nth-child(2)":{
        margin:"2em 0"
      },
      "& > *:nth-child(3)":{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
        "& > button":{
          margin:".3em .5em"
        }
      },
      "& > *:last-child":{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        "& > p":{
          margin:".5em 0",
          fontSize:"1.4em",
          fontWeight:"900"
        },
        "& > button":{
          padding:".7em 2.5em"
        }
      }
    }
  },
  product:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",  
    "& > h5":{
      fontSize:"2.5em",
      "& > span":{
        fontFamily: "Pacifico, cursive"          
      }
    },
    "& > span":{
      fontFamily: "Pacifico, cursive"
    }
  },
  recipeContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    margin:"1em 0",
    padding:".5em .9em",
    "& > h5":{
      fontSize:"2.5em",
      textTransform:"capitalize",
      margin:"1em 0",
      "& > span":{
        fontFamily: "Pacifico, cursive"
      }
    }
  },
  recipeBoxContainer:{
    display:"grid",
    gridGap:"1em",
    gridTemplateColumns:"repeat( auto-fit, minmax(250px, 1fr))"
  },
  recipeBox:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    border:`1px solid ${pink["A700"]}`,
    borderRadius:"1em",
    margin:"1.5em 0",
    overflow:"hidden",
    "& > *:first-child":{
      height:"15em",
      width:"100%",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
    },
    "& > *:last-child":{
      padding:".5em .9em",
      paddingTop:0
    },
    "& h6":{
      color:pink["A400"]
    },
    "& span":{
      margin:"1.5em 0",
      fontSize:"1.2em"
    },
    "& p:last-child":{
      textAlign:"right",
      "& > a":{
        color:pink["A200"]
      }
    }
  },
  getInTouch:{
    margin:"2em 0",
    maxWidth:"40em",
    textAlign:"center",
    color:pink["A200"],
    "& > h6":{
      fontSize:"2em",
      "& > span:first-child":{
        fontWeight:600
      },
      "& > span:last-child":{
        fontWeight:100,
        fontFamily: "Pacifico, cursive"
      }
    }
  }
}))


const Index = () => {
  const classes = useStyles()
  const [isOpen,setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return(
    <Box className={classes.root}>
      <Navbar handleToggle={handleToggle}/>
      <Box className={classes.mainView}>
        <Box/>
        <Box>
          <Typography variant="h5">
            Welcome to Sasselbakery
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur
            sequi temporibus quae fugit aspernatur, eligendi asperiores atque voluptatibus
            quo iure molestias fuga assumenda repellendus illo porro labore quis?
            {/* Accusantium provident sit rem quibusdam nobis autem, eligendi odit deleniti
            voluptatum iste voluptatibus at ratione possimus qui, vero dignissimos dicta
            asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis, */}
          </Typography>
          <Button onClick={handleToggle} style={{
            backgroundColor:pink[100],
            borderRadius:"5em",
            fontSize:"1em",
            marginTop:"1em",
            padding:".9em 1.5em"
          }} >Discover more</Button>
        </Box>
      </Box>
      <Box className={classes.anotherMainView}/>
      <Box className={classes.intro} >
        <Typography variant="h5">
          A package selected for you
        </Typography>
        <Typography component="span" variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur sequi
          temporibus quae fugit aspernatur, eligendi asperiores atque voluptatibus quo iure molestias
          fuga assumenda repellendus illo porro labore quis? Accusantium provident sit rem quibusdam
          nobis autem, eligendi odit deleniti voluptatum iste voluptatibus at ratione possimus qui, vero
          {/* dignissimos dicta asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis, ipsam
          tenetur doloribus obcaecati suscipit corporis ipsum aspernatur? Ad nulla illo beatae veritatis
          labore commodi incidunt cupiditate numquam magnam at aspernatur quae, dolore neque ipsum laborum
          aperiam harum perspiciatis sunt provident omnis odio dolorem dignissimos quia id? Nemo sit sequi */}
          asperiores.
        </Typography>
        <Button style={{
          backgroundColor:pink["A700"],
          color:"rgba(255,255,255,.8)"
        }} >
          Learn More
        </Button>
      </Box>
      <section className={classes.mediaSection}>
        <Box className={classes.mediaContainer}>
          <Box>
            <Typography variant="h4">
              Quality
            </Typography>
            <Typography>
              dignissimos dicta asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis, ipsam
              tenetur doloribus obcaecati suscipit corporis ipsum aspernatur? Ad nulla illo beatae veritatis
            </Typography>
            <Button  style={{
              backgroundColor:pink["A700"],
              color:"rgba(255,255,255,.8)"
            }} >
              Learn More
            </Button>
          </Box>
          <Box style={{backgroundImage:`url(${MainBg})`}} />
        </Box>
        <Box className={classes.mediaContainer}>
          <Box>
            <Typography variant="h4">
              Quality
            </Typography>
            <Typography>
              dignissimos dicta asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis, ipsam
              tenetur doloribus obcaecati suscipit corporis ipsum aspernatur? Ad nulla illo beatae veritatis
            </Typography>
            <Button  style={{
              backgroundColor:pink["A700"],
              color:"rgba(255,255,255,.8)"
            }} >
              Learn More
            </Button>
          </Box>
          <Box style={{backgroundImage:`url(${MainBg2})`}} />
        </Box>
        <Box className={classes.mediaContainer}>
          <Box>
            <Typography variant="h4">
              Quality
            </Typography>
            <Typography>
              dignissimos dicta asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis, ipsam
              tenetur doloribus obcaecati suscipit corporis ipsum aspernatur? Ad nulla illo beatae veritatis
            </Typography>
            <Button  style={{
              backgroundColor:pink["A700"],
              color:"rgba(255,255,255,.8)"
            }} >
              Learn More
            </Button>
          </Box>
          <Box style={{backgroundImage:`url(${MainBg})`}} />
        </Box>
      </section>
      <section>
        <Box className={classes.starProduct}>
          <Box style={{
            backgroundImage:`url(${MainBg})`
          }} />
          <Box className={classes.product}>
              <Typography component="h5">
                Our star <span>product</span>
              </Typography>
            <Box className={classes.imageLabel}>
              <Box style={{
                backgroundImage:`url(${MainBg2})`
              }} />
              <Box>
                <Typography>
                  This is a label
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" >
                  Snack Black And White Chocolate
                </Typography>
                <Typography component="span" variant="body1" >
                  Accusantium provident sit rem quibusdam nobis autem, eligendi odit deleniti
                  voluptatum iste voluptatibus at ratione possimus qui, vero dignissimos dicta
                  asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis
                </Typography>
                <Box >
                  <Button style={{
                    color:pink["A200"],
                  }} variant="outlined">Snack</Button>
                  <Button  style={{
                    color:pink["A200"]
                  }}  variant="outlined">Chip</Button>
                  <Button  style={{
                    color:pink["A200"]
                  }}  variant="outlined">Cookie</Button>
                  <Button  style={{
                    color:pink["A200"]
                  }}  variant="outlined">Cake</Button>
                  <Button  style={{
                    color:pink["A200"]
                  }}  variant="outlined">Strawberry</Button>
                  <Button  style={{
                    color:pink["A200"]
                  }}  variant="outlined">Lovely</Button>
                </Box>
                <Box>
                  <Typography>
                    {new Intl.NumberFormat('en-US', {style:"currency",currency:"NGN"}).format(3000)}
                  </Typography>
                  <Button  style={{
                    backgroundColor:pink["A200"]
                  }}  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <section className={classes.recipeContainer}>
        <Typography component="h5">
          Our other <span>recipes</span>
        </Typography>
        <Box className={classes.recipeBoxContainer}> 
          <Box className={classes.recipeBox}>
            <Box style={{
              backgroundImage:`url(${MainBg2})`
            }} />
            <Box>
              <Typography variant="h6">
                  Curry Dragon Bowl
              </Typography>
              <Typography variant="caption" >
                Caption
              </Typography>
              <Typography variant="body2">
                Accusantium provident sit rem quibusdam nobis autem, eligendi odit deleniti
                voluptatum iste voluptatibus at ratione possimus qui, vero dignissimos dicta
                asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis.
              </Typography>
              <Typography>
                <Link href="/">
                  Show Recipe
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.recipeBox}>
            <Box style={{
              backgroundImage:`url(${MainBg2})`
            }} />
            <Box>
              <Typography variant="h6">
                  Curry Dragon Bowl
              </Typography>
              <Typography variant="caption" >
                Caption
              </Typography>
              <Typography variant="body2">
                Accusantium provident sit rem quibusdam nobis autem, eligendi odit deleniti
                voluptatum iste voluptatibus at ratione possimus qui, vero dignissimos dicta
                asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis.
              </Typography>
              <Typography>
                <Link href="/">
                  Show Recipe
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.recipeBox}>
            <Box style={{
              backgroundImage:`url(${MainBg2})`
            }} />
            <Box>
              <Typography variant="h6">
                  Curry Dragon Bowl
              </Typography>
              <Typography variant="caption" >
                Caption
              </Typography>
              <Typography variant="body2">
                Accusantium provident sit rem quibusdam nobis autem, eligendi odit deleniti
                voluptatum iste voluptatibus at ratione possimus qui, vero dignissimos dicta
                asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis.
              </Typography>
              <Typography>
                <Link href="/">
                  Show Recipe
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.recipeBox}>
          <Box style={{
            backgroundImage:`url(${MainBg2})`
          }} />
          <Box>
            <Typography variant="h6">
                Curry Dragon Bowl
            </Typography>
            <Typography variant="caption" >
              Caption
            </Typography>
            <Typography variant="body2">
              Accusantium provident sit rem quibusdam nobis autem, eligendi odit deleniti
              voluptatum iste voluptatibus at ratione possimus qui, vero dignissimos dicta
              asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis.
            </Typography>
            <Typography>
              <Link href="/">
                Show Recipe
              </Link>
            </Typography>
          </Box>
        </Box>
        </Box>
      </section>
      <section className={classes.getInTouch}>
        <Typography component="h6">
          <span>
            Let's Keep&nbsp; 
          </span>
          <span>
            in touch!
          </span>
        </Typography>
        <Typography>
          Accusantium provident sit rem quibusdam nobis autem, eligendi odit deleniti
            voluptatum iste voluptatibus at ratione possimus qui, vero dignissimos dicta
            asperiores totam hic illo. Hic quisquam error itaque officiis blanditiis.
        </Typography>
      </section>
    </Box>
  )
}

export default Index