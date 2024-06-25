import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator'; // Remove IsDate import
import { Date as MongooseDate } from 'mongoose'; // Import Date type from mongoose

export class RegisterUserDto {

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;


  @IsNotEmpty()
  @IsString()
  prenom: string;


  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  confirmPassword: string;


  role: string;

  constructor(prenom: string, nom: string, email: string, password: string, confirmPassword: string) {
    this.prenom = prenom;
    this.name = nom;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.role = 'consommateur'; // Initialisez le rôle par défaut

}
}

// export class RegisterUserDto {
//   prenom: string;
//   nom: string;
//   téléphone: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   role: string; // Ajoutez la propriété 'role' ici

  // constructor(prenom: string, nom: string, email: string, password: string, téléphone: string, confirmPassword: string) {
  //   this.prenom = prenom;
  //   this.nom = nom;
  //   this.téléphone = téléphone;
  //   this.email = email;
  //   this.password = password;
  //   this.confirmPassword = confirmPassword;
  //   this.role = 'consommateur'; // Initialisez le rôle par défaut
  // }
// }


// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   IconButton,
//   InputAdornment,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Typography,
// } from "@mui/material";
// import { AddCircleOutline, Delete, Edit, Search } from "@mui/icons-material";
// import Header from '../../components/Header';
// import axios from 'axios';

// const Liste = () => {
//   const [listeResto, setListeResto] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [nameError, setNameError] = useState(false);
//   const [telephoneError, setTelephoneError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [adresseError, setAdresseError] = useState(false);
//   const [dateInscriptionError, setDateInscriptionError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [deleteItemId, setDeleteItemId] = useState(null);

//   useEffect(() => {
//     fetchRestaurants();
//   }, []);

//   const fetchRestaurants = async () => {
//     try {
//       const response = await axios.get('http://localhost:3004/users?role=resto', {
//         params: {
//           fields: 'name telephone email adresse role createdAt', // Spécifiez les champs que vous voulez récupérer
//         },
//       });
//       setListeResto(response.data);
//     } catch (error) {
//       console.error('Error fetching restaurants:', error);
//     }
//   };

//   const handleAddClick = () => {
//     setDialogOpen(true);
//     setSelectedItem({}); // Clear selected item
//   };

//   const handleEditClick = (item) => {
//     setDialogOpen(true);
//     // Utiliser la date de création comme date d'inscription par défaut
//     const defaultDateInscription = new Date(item.createdAt).toLocaleDateString();
//     setSelectedItem({ ...item, dateInscription: defaultDateInscription });
//   };
   
//   const handleDeleteClick = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3004/users/${id}`);
//       setListeResto(listeResto.filter(item => item._id !== id));
//     } catch (error) {
//       console.error('Error deleting restaurant:', error);
//     }
//   };


//   const updateRestaurant = async (newItem) => {
//     try {
//       await axios.put(`http://localhost:3004/users/${newItem._id}`, newItem);
//       setListeResto(listeResto.map(item => item._id === newItem._id ? newItem : item));
//     } catch (error) {
//       console.error('Error updating restaurant:', error);
//     }
//   };

//   const createRestaurant = async (newItem) => {
//     try {
//       const response = await axios.post('http://localhost:3004/users/create-resto', newItem);
//       setListeResto([...listeResto, response.data]);
//     } catch (error) {
//       console.error('Error creating restaurant:', error);
//     }
//   };
  


//   const handleSave = async (newItem) => {
//     try {
//       if (selectedItem._id) {
//         // Update existing restaurant
//         await updateRestaurant(newItem);
//       } else {
//         // Create new restaurant
//         await createRestaurant(newItem);
//       }
//     } catch (error) {
//       console.error('Error saving restaurant:', error);
//     }
//     // Close the dialog after saving
//     setDialogOpen(false);
//   };

  

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3004/users/name/${searchTerm}`);
//       // Check if the response data is an array or a single object
//       const searchData = Array.isArray(response.data) ? response.data : [response.data];
//       setListeResto(searchData);
//     } catch (error) {
//       console.error('Error searching restaurants:', error);
//     }
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     // Clear errors when dialog is closed
//     setNameError(false);
//     setTelephoneError(false);
//     setEmailError(false);
//     setAdresseError(false);
//     setDateInscriptionError(false);
//     setPasswordError(false);
//     // Clear delete item ID
//     setDeleteItemId(null);
//   };

//   const handleDeleteConfirmationClose = async (confirmed) => {
//     if (confirmed) {
//       try {
//         await axios.delete(`http://localhost:3004/users/${deleteItemId}`);
//         setListeResto(listeResto.filter(item => item._id !== deleteItemId));
//       } catch (error) {
//         console.error('Error deleting restaurant:', error);
//       }
//     }
//     // Réinitialiser l'ID du restaurant à supprimer et fermer le dialogue de confirmation
//     setDeleteItemId(null);
//     setDialogOpen(false);
//   };

//   return (
//     <Box m="20px">
//       <Header title="Liste " subtitle="Liste des Restaurents" />
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         mb={2}
//         flexDirection={{ xs: "column", sm: "row" }}
//       >
//         <Box mb={{ xs: 2, sm: 0 }}>
//           <TextField
//             label="Rechercher un Restaurent"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={handleSearch}>
//                     <Search />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Box>
//         <Box mb={{ xs: 2, sm: 0 }}>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<AddCircleOutline />}
//             onClick={handleAddClick}
//           >
//             Ajouter un Restaurent
//           </Button>
//         </Box>
//       </Box>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>name</TableCell>
//               <TableCell>telephone</TableCell>
//               <TableCell>email</TableCell>
//               <TableCell>adresse</TableCell>
//               <TableCell>dateInscription</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {listeResto.map((item) => (
//               <TableRow key={item._id}>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell>{item.telephone}</TableCell>
//                 <TableCell>{item.email}</TableCell>
//                 <TableCell>{item.adresse}</TableCell>
//                 <TableCell>{new Date(item.createdAt).toLocaleString()}</TableCell>
                
//                 <TableCell>
//                   <IconButton onClick={() => handleEditClick(item)}>
//                     <Edit />
//                   </IconButton>
//                   <IconButton onClick={() => handleDeleteClick(item._id)}>
//                     <Delete />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>{selectedItem.id ? "Modifier Restaurent" : "Ajouter Restaurent"}</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Nom Resto"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={selectedItem.name || ""}
//             onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
//             error={nameError}
//             helperText={nameError && "Nom est obligatoire"}
//           />
//           <TextField
//             label="Téléphone"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={selectedItem.telephone || ""}
//             onChange={(e) => setSelectedItem({ ...selectedItem, telephone: e.target.value })}
//             error={telephoneError}
//             helperText={telephoneError && "Téléphone est obligatoire"}
//           />
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={selectedItem.email || ""}
//             onChange={(e) => setSelectedItem({ ...selectedItem, email: e.target.value })}
//             error={emailError}
//             helperText={emailError && "Email est obligatoire"}
//           />
//           <TextField
//             label="Adresse"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={selectedItem.adresse || ""}
//             onChange={(e) => setSelectedItem({ ...selectedItem, adresse: e.target.value })}
//             error={adresseError}
//             helperText={adresseError && "Adresse est obligatoire"}
//           />
//           <TextField
//             label="Date d'inscription"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={selectedItem.dateInscription || ""}
//             onChange={(e) => setSelectedItem({ ...selectedItem, dateInscription: e.target.value })}
//             error={dateInscriptionError}
//             helperText={dateInscriptionError && "Date d'inscription est obligatoire"}
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={selectedItem.password || ""}
//             onChange={(e) => setSelectedItem({ ...selectedItem, password: e.target.value })}
//             error={passwordError}
//             helperText={passwordError && "Password est obligatoire"}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Annuler</Button>
//           <Button color="primary" onClick={handleSave}>
//             Sauvegarder
//           </Button>
//         </DialogActions>
//       </Dialog>
//       {/* Dialog for delete confirmation */}
//       <Dialog open={dialogOpen && deleteItemId !== null} onClose={() => handleDeleteConfirmationClose(false)}>
//         <DialogTitle>{`Confirmer la suppression de ${listeResto.find(item => item._id === deleteItemId)?.name || "ce restaurant"}`}</DialogTitle>
//         <DialogContent>
//           <Typography>Vous êtes sur le point de supprimer le restaurant. Êtes-vous sûr de vouloir continuer ?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => handleDeleteConfirmationClose(false)}>Annuler</Button>
//           <Button color="error" onClick={() => handleDeleteConfirmationClose(true)}>Supprimer</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Liste;
