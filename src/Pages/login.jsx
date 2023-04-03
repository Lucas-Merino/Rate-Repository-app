import React from "react";
import { Formik, useField } from "formik"
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { ValidationSchema } from "../validation/ValidationSchema.js";

const initialValues = {
    email: "", 
    password: "", 
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: "#999",
        paddingHorizontal: 20, 
        paddingVertical: 10,
        marginVertical: 10, 
    },
    form: {
        margin: 12,
    },
    error:{
        color: "red",
        fontSize: 12,
        marginBottom: 20, 
        marginTop: -5,  
    },
    errorInput: {
        borderColor: "red",
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers ] = useField(name)
    return (
        <>
            <TextInput 
                error={styles.errorInput}
                style={styles.textInput}
                value={field.value} 
                onChangeText={value => helpers.setValue(value)} 
                {...props}
            />
            {meta.error && <Text style={styles.error}>{meta.error}</Text>}
        </>
    )
}



export default function LogInPage (){
    return(
        <Formik 
            validationSchema={ValidationSchema}
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleSubmit}) =>{
                return (
                <View style={styles.form}>
                    <FormikInputValue    
                        name="email"
                        placeholder="E-mail"
                    />
                    <FormikInputValue 
                        name="password"
                        placeholder="password"
                        secureTextEntry
                        />
                    <Button onPress={handleSubmit} title="Log In"/>
                </View>
                )
            }}
        </Formik>
    )
}
