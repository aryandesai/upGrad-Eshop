import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import NavigationBar from "../navigationBar/NavigationBar";

import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [contactNumberError, setContactNumberError] = useState(false);

            const handleSubmit = (event) => {
                event.preventDefault();

                setFirstNameError(false);
                setLastNameError(false);
                setEmailError(false);
                setPasswordError(false);
                setContactNumberError(false);

                if (firstName === "") {
                    setFirstName(true);
                }
                if (lastName === "") {
                    setLastName(true);
                }
                if (email === "") {
                    setEmailError(true);
                }
                if (password === "") {
                     setPasswordError(true);
                }
                if (contactNumber === "") {
                    setContactNumberError(true);
                }

                if (firstName && lastName && email && password && contactNumber) {
                        axios
                            .post("http://localhost:8080/api/auth/signup", {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password,
                            contactNumber: contactNumber,
                            })
                            .then(function (response) {
                            alert(response.data.message);
                            navigate("/login");
                            })
                            .catch(function (error) {
                            alert(
                                "Error: There was an issue in registering the user, please try again later."
                            );
                            });
                }
            };

            return (
                <>
                <NavigationBar />
                <div className="signupContainer">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                    <Avatar className="avatarStyle">
                        <LockIcon />
                    </Avatar>
                    <Typography gutterBottom variant="h5" component="p">
                        Sign up
                    </Typography>
                    <TextField label="First Name" onChange={(e) => setFirstName(e.target.value)} required variant="outlined" type="text"
                        sx={{ mb: 3 }} fullWidth value={firstName} error={firstNameError}
                    />
                    <TextField label="Last Name" onChange={(e) => setFirstName(e.target.value)} required variant="outlined" type="text"
                        sx={{ mb: 3 }} fullWidth value={lastName} error={lastNameError}
                    />
                    <TextField label="Email Address" onChange={(e) => setFirstName(e.target.value)} required variant="outlined" type="text"
                        sx={{ mb: 3 }} fullWidth value={email} error={emailError}
                    />
                    <TextField label="Password" onChange={(e) => setFirstName(e.target.value)} required variant="outlined" type="text"
                        sx={{ mb: 3 }} fullWidth value={password} error={passwordError}
                    />
                    <TextField label="Confirm Password" onChange={(e) => setFirstName(e.target.value)} required variant="outlined" type="text"
                        sx={{ mb: 3 }} fullWidth value={confirmPassword} error={password.length > 0 && confirmPassword !== password}
                    />
                    <TextField label="Contact Number" onChange={(e) => setFirstName(e.target.value)} required variant="outlined" type="text"
                        sx={{ mb: 3 }} fullWidth value={contactNumber} error={contactNumberError}
                    />
                    
                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, width: "100%" }}
                        disabled={password.length > 0 && confirmPassword !== password}
                    >
                        Sign Up
                    </Button>
                    <div className="loginLink">
                        <Link to="/login">Already have an account? Sign in</Link>
                    </div>
                    </form>
                </div>
                <div className="signupFooter">
                    Copyright &copy; <Link href="https://www.upgrad.com/">upGrad</Link> 2023
                </div>
                </>
            );
            }

    export default Signup;