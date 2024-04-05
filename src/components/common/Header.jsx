
export default function Header(){

    return(
        <div class="header">
            <div class="container">
                <a href="#" class="navbar-brand scroll-top">Sayuru</a>
                <nav class="navbar navbar-inverse" role="navigation">
                    <div class="navbar-header">
                        <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    {/* < />!--/.navbar-header--> */}
                    <div id="main-nav" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="menu.html">Our Menus</a></li>
                            <li><a href="blog.html">Blog Entries</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* < />!--/.navbar-collapse--> */}
                </nav>
                {/* < />!--/.navbar--> */}
            </div>
            {/* < />!--/.container--> */}
        </div>
    )
}