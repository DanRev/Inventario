import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import firebase from "../platforms/firebaseConnector";
import { Input, InputLabel, FormControl, Button } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "20% 60% 20%",
    gridTemplateRows: "30% 20% 20%",
    height: "100vh",
    "@media (max-width: 400px)": {
      gridTemplateColumns: "10% 80% 10%",
      gridTemplateRows: "15% 30% 20%"
    }
  },
  signIn: {
    // marginTop: "10%",
    // marginBottom: "10%",
    border: "1px solid #DADCE0",
    borderRadius: "5px",
    width: "55%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    backgroundColor: "#FFFFFF"
  },
  containerOrganization: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumnStart: "2",
    gridRowStart: "2",
    gridRowEnd: "4"
  },
  inputUser: {
    height: "22px",
    width: "100%"
  },
  formControlInput: {
    marginBottom: "20px"
  },
  labelIn: {
    margin: "-5px 0px 5px 0px"
  },
  h1: {
    textAlign: "center"
  },
  iconLock: {
    paddingBottom: "3px"
  },
  properties: {
    fontSize: "13px",
    margin: "5px 0px 10px 0px"
  },
  containerProps: {
    width: "23vw",
    textAlign: "end",
    "@media (max-width: 400px)": {
      width: "65vw"
    }
  },
  margin: {
    margin: "20px 0px 0px 0px"
  },
  btnLogin: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "90px"
  }
});

class frontPage extends Component {
  state = { name: "Daniel" };

  componentWillMount() {
    const nameRef = firebase
      .database()
      .ref()
      .child("object");
    // .child("name");

    console.log(
      nameRef.on("value", snapshot => {
        console.log(snapshot.val());
      })
    );

    // this.writeUserData(
    //   1,
    //   "Daniel",
    //   "dbeltrangomez@gmail.com",
    //   "https://www.google.com.co"
    // );
    // this.writeUserData(
    //   2,
    //   "Daniel",
    //   "dbeltrangomez@gmail.com",
    //   "https://www.google.com.co"
    // );
  }

  writeUserData(userId, name, email, imageURL) {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        username: name,
        email: email,
        profile_picture: imageURL
      });
  }

  handleClickShowPassword() {
    this.setState({ values: !this.state.values });
  }

  render() {
    const { classes } = this.props;

    // function signIn() {
    //   // Sign into Firebase using popup auth & Google as the identity provider.
    //   var provider = new firebase.auth.GoogleAuthProvider();
    //   firebase.auth().signInWithPopup(provider);
    // }

    // function signOut() {
    //   // Sign out of Firebase.
    //   firebase.auth().signOut();
    // }

    return (
      <React.Fragment>
        <div className={classes.container}>
          <div className={classes.containerOrganization}>
            <div className={classes.signIn}>
              <h1 className={classes.h1}>Sign in</h1>
              <FormControl className={classes.formControlInput}>
                <InputLabel className={classes.labelIn} htmlFor="inputUsr">
                  Username
                </InputLabel>
                <Input
                  id="inputUsr"
                  className={classes.inputUser}
                  startAdornment={<Person />}
                />
              </FormControl>
              <FormControl className={classes.formControlInput}>
                <InputLabel className={classes.labelIn} htmlFor="inputPass">
                  Password
                </InputLabel>
                <Input
                  id="inputPass"
                  className={classes.inputUser}
                  startAdornment={<Lock className={classes.iconLock} />}
                />
              </FormControl>
              <div className={classes.containerProps}>
                <h6 className={classes.properties}>
                  Not account?&nbsp;
                  <Link
                    className={classes.properties}
                    to="/account/createAccount"
                  >
                    Create One!
                  </Link>
                </h6>
                <Link className={classes.properties}>
                  Forgot your Password?
                </Link>
              </div>
              <div className={classes.btnLogin}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.margin}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(frontPage);
