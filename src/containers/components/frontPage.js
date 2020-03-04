import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import firebase from "../platforms/firebaseConnector";
import {
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControl
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "20% 60% 20%",
    height: "100vh"
  },
  signIn: {
    gridColumnStart: "2",
    marginTop: "10%",
    marginBottom: "10%",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column"
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
  }
});

class frontPage extends Component {
  state = { values: true, name: "Daniel" };

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
          <div className={classes.signIn}>
            <h1 style={{ "text-align": "center" }}>INICIO DE SESION</h1>
            <FormControl className={classes.formControlInput}>
              <InputLabel className={classes.labelIn} htmlFor="inputUsr">
                Type your User
              </InputLabel>
              <Input id="inputUsr" className={classes.inputUser} />
            </FormControl>
            <FormControl className={classes.formControlInput}>
              <InputLabel className={classes.labelIn} htmlFor="inputPass">
                Type your Password
              </InputLabel>
              <Input
                id="inputPass"
                className={classes.inputUser}
                type={this.state.value ? "text" : "password"}
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={() => {
                //         this.handleClickShowPassword();
                //       }}
                //     >
                //       {this.state.values ? <Visibility /> : <VisibilityOff />}
                //     </IconButton>
                //   </InputAdornment>
                // }
              />
            </FormControl>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(frontPage);
