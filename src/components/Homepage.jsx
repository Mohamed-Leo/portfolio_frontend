import { useEffect  , useState} from 'react';
import Header from './Header';
import Welcomelanding from './Welcomelanding';
import Skillssection from './Skillssection';
import Projectssection from './Projectssection';
import Contactsection from './Contactsection';
import Footer from './Footer';
import Loder from './Loder';
import ScrollToTop from './ScrollToTop';

function Homepage () {

    const [frontValues , Setfrontvalue] = useState(0);
    const [backValues , SetbackValues] = useState(0);

    useEffect(() => {

        let sections = document.querySelectorAll("section");
        let links = document.querySelectorAll('.activated');

        window.onscroll = () => {
            sections.forEach( sec  => {
                let top = window.scrollY;
                let offset = sec.offsetTop -150;
                let height = sec.offsetHeight;

                if (top >= offset && top < offset + height) {
                    sec.classList.add("show-animate");

                    if(sec.classList.contains('active-cy') && sec.classList.contains('show-animate')) {
                        Setfrontvalue ([90 , 85 , 78 , 80 , 82 , 77 , 87]);
                        SetbackValues ([77 , 70 , 80 , 80]);
                    }
                    else {
                        Setfrontvalue([0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0]);
                        SetbackValues ([0 , 0 , 0 , 0]);
                    }

                    // adding active to links while scrolling----
                    links.forEach(li => sec.id === li.dataset.linkactive ? li.classList.add('active') : li.classList.remove('active'));
                }
                else {
                    sec.classList.remove("show-animate");
                }
            });
        };
    } , []);


    return (
        <>

            {/* Start header */}
            <Header/>
            {/* End header */}

            {/* Start Welcomelanding */}
            <Welcomelanding />
            {/* End Welcomelanding */}

            {/* Start main */}
            <main>
                <Skillssection frontpercentage= {frontValues} backpercentage = {backValues}/>
                <Projectssection />
                <Contactsection />
            </main>
            {/* end main */}


            {/* Start Footer */}
            <Footer />
            {/* End Footer */}

            {/* Start ScrollToTop */}
            <ScrollToTop />
            {/* End ScrollToTop */}

            {/* Start loder */}
            <Loder />
            {/* End loder */}
        </>
    );
}

export default Homepage;
