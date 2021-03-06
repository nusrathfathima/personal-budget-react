import React from 'react';
import ChartJS from '../ChartJS/ChartJS';
import D3JSChart from '../D3JSChart/D3JSChart';

function HomePage() {

  return (
    <article className="container center">
    
            <section className="page-area">
                
                {/* <div>
                    <button className="dark-mode-button" onclick="darkMode()">Toggle Dark Mode</button>
                </div> */}
                
                <header className="text-box">
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </header>
        
                <header className="text-box">
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </header>
        
                <header className="text-box">
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </header>
        
                <header className="text-box">
                    <h1>Free</h1>
                    <p>
                        This app is free!!! And you are the only one holding your data!
                    </p>
                </header>
        
                <header className="text-box">
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </header>
        
                <header className="text-box">
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </header>
                <header className="text-box">
                    <h1>D3JS Chart</h1>
                    <div id="D3JSChart">
                        <D3JSChart/>
                    </div>
                </header>
                 
                <header className="text-box">
                    <h1>Chart</h1>
                    <p>
                       <ChartJS/>
                    </p>
                </header>
                
            </section>
    
        </article>
  );
}

export default HomePage;
