import online from '../public/assets/icon-online.svg'
import budgeting from '../public/assets/icon-budgeting.svg'
import onboarding from '../public/assets/icon-onboarding.svg'
import api from '../public/assets/icon-api.svg'

import currency from '../public/assets/image-currency.jpg'
import restaurant from '../public/assets/image-restaurant.jpg'
import plane from '../public/assets/image-plane.jpg'
import confetti from '../public/assets/image-confetti.jpg'


export const navigation = ['Home', 'About', 'Contact', 'Blog', 'Careers']

export const options = [
    {
        id: 1,
        img: online,
        title: 'Online Banking',
        text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
        id: 2,
        img: budgeting,
        title: 'Simple Budgeting',
        text: 'See exactly where your money goes each month. Recieve notifications when you\'re close to hitting your limits.'
    },
    {
        id: 3,
        img: onboarding,
        title: 'Fast Onboarding',
        text: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
        id: 4,
        img: api,
        title: 'Open API',
        text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
]

export const article = [
    {
        id: 1,
        img: currency,
        alt: 'Currency',
        author: 'Claire Robinson',
        title: 'Recieve money in any currency with no fees',
        text: 'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only recieve money in a single...'
    },
    {
        id: 2,
        img: restaurant,
        alt: 'Restaurant',
        author: 'Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        text: 'Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you ...'
    },
    {
        id: 3,
        img: plane,
        alt: 'Plane',
        author: 'Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        text: 'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re aboard. We\'ll even show you ...'
    },
    {
        id: 4,
        img: confetti,
        alt: 'Confetti',
        author: 'Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        text: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site ...'
    }
]

export const footerLink = ['About Us', 'Contact', 'Blog']

export const footerLinks = ['Careers', 'Support', 'Privacy Policy']