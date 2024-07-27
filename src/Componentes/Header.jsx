import React from 'react'
import '../Estilos/Header.css'

const Header = () => {


    const secciones = [
        {
            nombre: 'Institucional',
            href: './institucional'
        },
        {
            nombre: 'Nuestra gente',
            href: './nuestragente'
        },
        {
            nombre: 'Turismo',
            href: './turismo'
        },
        {
            nombre: 'Contacto',
            href: './contacto'
        },
    ]
    return (
        <div className='contenedor-header'>
            <div className='contenedor-navBar'>
                <img
                    className='header-logo'
                    src={require('../Imagenes/logo.png')} alt="" />
                <div className='header-enlaces'>
                   {secciones.map( seccion => (
                    <a href={seccion.href}>{seccion.nombre}</a>
                   ))}
                </div>
            </div>
            <img
                className='header-img'
                src={require('../Imagenes/portada-tafi.jpg')} alt="" 
                />
        </div>
    )
}

export default Header;