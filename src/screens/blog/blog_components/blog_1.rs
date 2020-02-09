use yew::prelude::*;

pub struct Blog1 {}

impl Component for Blog1 {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Blog1 {}
    }

    fn update(&mut self, _: <Self as yew::html::Component>::Message) -> bool {
        unimplemented!()
    }

    fn view(&self) -> Html {
        html! {
            <div class="blog-list">
                <div class="article-container">
                    <h1 class="heading">{"Xamarin Why & Why Not"}</h1>
                    <div class="article-detail">
                        <b>
                            {"Some light on Xamarin through a frontend perspective in the space of React Native and Flutter. Just to put it out there I might have a bias in my analysis but I've also worked on Cordova/Ionic, React Native and Xamarin Forms on job."}
                        </b>
                        <div class="article-section">
                            <h2>{"Why"}</h2>
                            <p>
                                {"Xamarin got a it's self into a bit of a pickle with React Native, previously with Ionic/Cordova and now Flutter. The predicament for Xamarin is that It's not really a cross platform but behaves like one. It got Xamarin Forms which is a cross platform solution but it also provides all of the native APIs (mind the edge cases) are first class citizen in Xamarin environment."}
                            </p>
                            <p>
                                {"The thing is Xamarin doesn't fit in React Native/Flutter box. It's not exactly a cross platform in a sense as are React Native and Flutter. Xamarin mainly offers Xamarin.Android and Xamarin.iOS. These are the project which define Xamarin best. You can write you entire Android App and iOS App separately, but using the same language with 100% of the platform APIs. Now that's some power."}
                            </p>
                            <div class="image-container">
                                <img src="/img/power_meme.png" alt="Need for Power" />
                                <p>{"Need for Power"}</p>
                            </div>
                            <p>
                                {"In Xamarin ecosystem you can just create a Xamarin.iOS project and just work on it. So, is the Xamarin.Android. Xamarin Forms is just a library that can sit on top of Xamarin iOS and Android. It builds and works just like any other cross platform solution but that's not where the Power of Xamarin comes from."}
                            </p>
                            <b>
                                {"Xamarin is an API wrapper in C# for iOS & Android (and other platforms)."}
                            </b>
                            <p>
                                {"Yes, that's right. It's mainly a wrapper nothing else. Everything else is used, built and ran exactly the same (in crude terms). You have MainActivity.cs in Xamarin.Android file and AppDelegate.cs Xamarin.iOS files. This gives you freedom to write as much as cross platform code you want in Xamarin Forms then break out of it and write native APIs directly without any restriction. This is why Xamarin has to be treated differently."}
                            </p>
                            <p>
                                {"To to do the same job in any other cross platform Tech you must learn at least 3 language. First one would be the Dart in case of Flutter or JS for React Native and on top of this Objective-C or Swift and Java or Kotlin. This is not the good old days when you needed a new language for every new thing you wanted to do. Now languages and echo systems around them are going more multi purpose than ever. You don't need to look into 6 different languages, You just need right tools and 1 language."}
                            </p>
                            <div class="image-container">
                                <img src="/img/xamarin_structure.jpeg" alt="Xamarin.Form Structure" />
                                <p>{"Xamarin.Form Structure"}</p>
                            </div>
                        </div>
                        <div class="article-section">
                            <h2>{"Dev Tooling"}</h2>
                            <i>{"You'll get your eggs just the way you like 'em"}</i>
                            <p>
                                {"Windows, Windows or both. Visual Studio is the thing you need. It's obviously mainly a Windows thing but also Mac version exists (which I personally feel to be an abomination)."}
                            </p>
                            <ul>
                                <li>{"Run Visual Studio on Windows (UWP must have)"}</li>
                                <li>{"Run Visual Studio for Mac on Mac (Mac Apps & iOS must have)"}</li>
                                <li>{"Run Visual Studio  on Windows in "}<a target="_blank" href="https://www.parallels.com/">{"Parallels"}</a>{" on a Mac (One solution to rule them all)"}</li>
                            </ul>
                        </div>
                        <div class="article-section">
                            <h2>{"Output"}</h2>
                            <p>
                                {"Project structure is really simple. First base platform implementations then abreaction layers on top."}
                            </p>
                            <div class="image-container">
                                <img src="/img/xamarin_project_structure.jpg" alt="Xamarin Project Structure" />
                                <p>{"Xamarin Project Structure"}</p>
                            </div>
                            <p>
                                {"So, what really is that you get from Xamarin. In a nutshell it compiles to machine code."}
                            </p>
                            <ul>
                                <li>{"iOS: Code compiles to native assembly code (AOT Compilation only)"}</li>
                                <li>{"Android: Code compiles AST then on runtime/execution to native assembly code (AOT & JIT Compilation)"}</li>
                            </ul>
                        </div>
                        <div class="article-section">
                            <h2>{"Performance"}</h2>
                            <p>
                                {"Better than or equal to any other cross platform solution. It's close enough to native that you don't have to worry about it, but still it's not native and you should never in the first place expect native performance either with such solutions."}
                            </p>
                        </div>
                        <div class="article-section">
                            <h2>{".Net"}</h2>
                            <p>
                                {"Since .Net Core things are upbeat. It's cross platform preferment then ever. So much so that Microsoft is competing with hippie barebone platforms in performance wars and winning."}
                            </p>
                            <div class="image-container">
                                <img src="/img/tech-empower-results.svg" alt="ASP.NET Core benchmarks" />
                                <p>{"ASP.NET Core benchmarks"}</p>
                            </div>
                            <p>
                                {"Almost all the major features provided on platform in Visual Studio and Visual Studio Mac are also provided in CLI as 'dotnet' command, with Windows getting Windows Subsystems for Linux (WSL), Mac getting 'dotnet' command, .Net supported on Linux and Azure CLI this platform is open for hacksters and there is a completely different mode and atmosphere around it."}
                            </p>
                            <p>
                                {"BTW this website is (was, now in Rust Yew) running whole Mono runtime (old open source dotnet runtime) in WebAssembly and running beta of "}<a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/client">{"Blazor Framework"}</a>{". A .Net based WebAssembly SPA Framework."}
                            </p>
                        </div>
                        <div class="article-section">
                            <h2>{"Microsoft"}</h2>
                            <p>
                                {"Now some people might be old enough here to have some (maybe a lot) of bad memories associated with Microsoft. Well, Yes those are all true but those were the dark days when people fought over platforms but now no one really cares. Now it's all about the services and Microsoft is all in on it."}
                            </p>
                            <p>
                                {"I'm not gonna argue that Microsoft is now all warm and cuddly, even though now they are and becoming more and more like this towards developers and hippie hacksters everyday, No! I'm gonna argue that Microsoft wants to build a services first future just like almost every other giant, for its self mainly from Azure. That's really good for us. You might ask why? Because It's in Microsoft's interest to enable developers to build things which consume its services."}
                            </p>
                            <p>
                                {"Microsoft does truly want happy developers. Who could've thought you could run"}
                                <code>{"rm -rf /"}</code>
                                {"on a windows machine and it would work."}
                            </p>
                            <ul>
                                <li>{"Yes, Windows now supports Linux literally and figuratively."}</li>
                                <li>{"New Modern Terminal (WIP)"}</li>
                                <li>{"ASP.NET Core, Xamarin and Windows Calculator is Open Source (& many more)"}</li>
                                <li>{"Azure DevOps CD/CI is free (unlimited minutes for open source/limited for private)"}</li>
                                <li>{"Azure App Services is free (basic tier)"}</li>
                                <li>{"Azure Blob Storage is free (basic tier)"}</li>
                                <li>{"PluralSlight, Data Camp, Opsgility subscriptions free (much more)"}</li>
                            </ul>
                            <p>{"It's a new Microsoft. So, maybe we can give Microsoft a try and look what they got."}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
}
