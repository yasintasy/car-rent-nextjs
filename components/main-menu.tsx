import React from 'react';
import Link from "next/link";
import Logo from "./svg/logo";
import MenuItem, { Menu } from './menu-item';
import DashboardMenuIcon from './svg/dashboard-menu-icon';
import CarMenuIcon from './svg/car-menu-icon';
import BookingMenuIcon from './svg/booking-menu-icon';
import NotifMenuIcon from './svg/notif-menu-icon';
import SettingMenuIcon from './svg/setting-menu-icon';
import PaymentMenuIcon from './svg/payment-menu-icon';
import TransactionMenuIcon from './svg/transaction-menu-icon';
import CarReportIcon from './svg/report-menu-icon';
import LogoutIcon from './svg/logout-icon';

const menus = [
    {
        icon: DashboardMenuIcon,
        title: 'Dashboard',
        href: '/'
    },
    {
        icon: CarMenuIcon,
        title: 'Drivers',
        href: '/drivers'
    },
    {
        icon: BookingMenuIcon,
        title: 'Bookings',
        href: '/bookings'
    },
    {
        icon: NotifMenuIcon,
        title: 'Notifications',
        href: '/notifications'
    },
    {
        icon: SettingMenuIcon,
        title: 'Settings',
        href: '/settings'
    }
] as Menu[];

const reportMenus = [
    {
        icon: PaymentMenuIcon,
        title: "Payment Details",
        href: '/payment-details',
    },
    {
        icon: TransactionMenuIcon,
        title: "Transactions",
        href: '/transactions',
    },
    {
        icon: CarReportIcon,
        title: "Car Reports",
        href: '/car-reports',
    },
] as Menu[];

const MainMenu = () => {
    return (
        <div className="flex flex-col justify-between flex-none p-6 text-white bg-black w-60">
            <div className="flex flex-col space-y-5">
                {/* Logo */}
                <div>
                    <Link href="/" className="block px-2 py-6">
                        <Logo />
                    </Link>
                </div>

                <div className="flex flex-col space-y-4">
                    <ul className="flex flex-col space-y-2">
                        {menus.map((menu, index) => (
                            <MenuItem
                                key={index}
                                title={menu.title}
                                href={menu.href}
                                icon={menu.icon}
                            />
                        ))}
                    </ul>

                    <hr className="py-2 ml-4 text-white/20" />

                    <div>
                        <p className="px-4 py-3 text-white/50">Report</p>

                        <ul>
                            {reportMenus.map((menu, index) => (
                                <MenuItem
                                    key={index}
                                    title={menu.title}
                                    href={menu.href}
                                    icon={menu.icon}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <button className="flex items-center justify-center w-full px-4 py-3 rounded-lg h3 bg-white/20">
                    <div className="mr-3">
                        <LogoutIcon />
                    </div>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default MainMenu;