import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "/home.png",
          label: "Home",
          href: "/",
          visible: ["superadmin", "admin", "operator"],
        },
        {
          icon: "/angkakreditpegawai.png",
          label: "Angka Kredit Pegawai",
          href: "/list/angkakreditpegawai",
          visible: ["superadmin", "admin", "operator"],
        },
        {
          icon: "/formasijabatan.png",
          label: "Formasi Jabatan",
          href: "/list/formasijabatan",
          visible: ["superadmin", "admin"],
        },
        {
          icon: "/logstatus.png",
          label: "Log Status",
          href: "/list/logstatus",
          visible: ["superadmin", "admin"],
        },
        {
          icon: "/manajemenuser.png",
          label: "Manajemen User",
          href: "/list/manajemenuser",
          visible: ["superadmin"],
        },
        {
          icon: "/class.png",
          label: "Classes",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/about.png",
          label: "About",
          href: "/list/about",
          visible: ["superadmin", "admin", "operator"],
        },
        {
          icon: "/feedback.png",
          label: "Feedback",
          href: "/list/feedback",
          visible: ["superadmin", "admin", "operator"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: "/profile.png",
          label: "Profile",
          href: "/profile",
          visible: ["superadmin", "admin", "operator"],
        },
        {
          icon: "/logout.png",
          label: "Logout",
          href: "/logout",
          visible: ["superadmin", "admin", "operator"],
        },
      ],
    },
  ];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
        {menuItems.map(i=>(
            <div className='flex flex-col gap-2' key={i.title}>
                <span className='hidden lg:block text-gray-400 font-light my-4'>{i.title}</span>
                {i.items.map((item) =>(
                    <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'>
                            <Image src={item.icon} alt="" width={20} height={20}/>
                            <span className="hidden lg:block">{item.label}</span>
                    </Link>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Menu