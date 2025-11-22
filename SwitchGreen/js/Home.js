<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="India's Renewable Energy Dashboard - Real-time statistics from MNRE">
    <title>Data Dashboard | SwitchGreen</title>
    <link rel="stylesheet" href="css/Data.css">
</head>
<body>

    <!-- HEADER -->
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <div class="logo-icon">🌱</div>
                <div class="logo-text">
                    <h1>Switch<span class="green">Green</span></h1>
                    <p>Energy Data & Statistics</p>
                </div>
            </div>
            <nav class="nav">
                <a href="Home.html" class="nav-link">
                    <span class="nav-icon">🏠</span>
                    <span>Home</span>
                </a>
                <a href="Data.html" class="nav-link active">
                    <span class="nav-icon">📊</span>
                    <span>Data</span>
                </a>
                <a href="Reports.html" class="nav-link">
                    <span class="nav-icon">📄</span>
                    <span>Reports</span>
                </a>
            </nav>
        </div>
    </header>

    <!-- PAGE HEADER -->
    <section class="page-header">
        <div class="header-background"></div>
        <div class="header-content">
            <h1 class="page-title">🇮🇳 India's Renewable Energy Dashboard</h1>
            <p class="page-subtitle">Official data from Ministry of New & Renewable Energy (MNRE)</p>
            
            <div class="header-badges">
                <span class="badge badge-verified">✓ VERIFIED DATA</span>
                <span class="badge badge-source">Source: MNRE</span>
                <span class="badge badge-date">Updated: October 31, 2025</span>
            </div>
        </div>
    </section>

    <!-- MAIN STATS -->
    <section class="main-stats">
        <div class="container">
            <div class="stats-row">
                <!-- Solar -->
                <div class="main-stat-card solar">
                    <div class="stat-icon">☀️</div>
                    <div class="stat-info">
                        <h3>SOLAR POWER</h3>
                        <div class="stat-number">129.92 <span>GW</span></div>
                        <div class="stat-percent">+64.9% of total</div>
                    </div>
                </div>

                <!-- Wind -->
                <div class="main-stat-card wind">
                    <div class="stat-icon">💨</div>
                    <div class="stat-info">
                        <h3>WIND POWER</h3>
                        <div class="stat-number">53.60 <span>GW</span></div>
                        <div class="stat-percent">+26.8% of total</div>
                    </div>
                </div>

                <!-- Hydro -->
                <div class="main-stat-card hydro">
                    <div class="stat-icon">💧</div>
                    <div class="stat-info">
                        <h3>SMALL HYDRO</h3>
                        <div class="stat-number">5.16 <span>GW</span></div>
                        <div class="stat-percent">+2.6% of total</div>
                    </div>
                </div>

                <!-- Biomass -->
                <div class="main-stat-card biomass">
                    <div class="stat-icon">🌾</div>
                    <div class="stat-info">
                        <h3>BIOMASS POWER</h3>
                        <div class="stat-number">11.61 <span>GW</span></div>
                        <div class="stat-percent">+5.8% of total</div>
                    </div>
                </div>
            </div>

            <!-- Total Capacity Card -->
            <div class="total-capacity-card">
                <div class="total-header">
                    <div class="total-icon">🇮🇳</div>
                    <h3>TOTAL RENEWABLE CAPACITY</h3>
                </div>
                <div class="total-value">200.30 <span>GIGAWATTS (GW)</span></div>
                
                <div class="progress-section">
                    <div class="progress-info">
                        <span>Progress to 500 GW by 2030</span>
                        <span class="progress-percent">40.06%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- KEY INSIGHTS -->
    <section class="insights-section">
        <div class="container">
            <h2 class="section-title">📈 Key Insights</h2>
            
            <div class="insights-grid">
                <div class="insight-card">
                    <div class="insight-icon">📊</div>
                    <h4>Growth Rate</h4>
                    <p class="insight-value">~15.2% <span>year-over-year</span></p>
                </div>
                
                <div class="insight-card">
                    <div class="insight-icon">🏆</div>
                    <h4>Leading State</h4>
                    <p class="insight-value">Rajasthan <span>40.78 GW</span></p>
                </div>
                
                <div class="insight-card">
                    <div class="insight-icon">🌍</div>
                    <h4>Global Rank</h4>
                    <p class="insight-value">4th Largest <span>in RE capacity</span></p>
                </div>
                
                <div class="insight-card">
                    <div class="insight-icon">🎯</div>
                    <h4>2030 Target Progress</h4>
                    <p class="insight-value">40.06% <span>of 500 GW goal</span></p>
                </div>
            </div>
        </div>
    </section>

    <!-- TOP 10 STATES TABLE -->
    <section class="table-section">
        <div class="container">
            <h2 class="section-title">🏆 Top 10 States by Renewable Energy Capacity</h2>
            <p class="section-subtitle">State-wise breakdown as of October 31, 2025</p>
            
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>State / UT</th>
                            <th>Solar (MW)</th>
                            <th>Wind (MW)</th>
                            <th>Hydro (MW)</th>
                            <th>Biomass (MW)</th>
                            <th>Total (GW)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="rank-cell"><strong>1</strong></td>
                            <td class="state-cell"><strong>Rajasthan</strong></td>
                            <td>35,337.88</td>
                            <td>5,208.75</td>
                            <td>23.85</td>
                            <td>207.52</td>
                            <td class="total-cell"><strong>40.78</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>2</strong></td>
                            <td class="state-cell"><strong>Gujarat</strong></td>
                            <td>24,143.16</td>
                            <td>14,493.38</td>
                            <td>113.30</td>
                            <td>129.85</td>
                            <td class="total-cell"><strong>38.88</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>3</strong></td>
                            <td class="state-cell"><strong>Maharashtra</strong></td>
                            <td>16,137.25</td>
                            <td>5,716.31</td>
                            <td>384.28</td>
                            <td>2,998.30</td>
                            <td class="total-cell"><strong>25.24</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>4</strong></td>
                            <td class="state-cell"><strong>Tamil Nadu</strong></td>
                            <td>11,471.94</td>
                            <td>11,938.34</td>
                            <td>123.05</td>
                            <td>1,046.62</td>
                            <td class="total-cell"><strong>24.58</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>5</strong></td>
                            <td class="state-cell"><strong>Karnataka</strong></td>
                            <td>10,592.12</td>
                            <td>8,193.29</td>
                            <td>1,284.73</td>
                            <td>1,916.05</td>
                            <td class="total-cell"><strong>21.99</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>6</strong></td>
                            <td class="state-cell"><strong>Andhra Pradesh</strong></td>
                            <td>5,925.61</td>
                            <td>4,397.78</td>
                            <td>163.31</td>
                            <td>594.02</td>
                            <td class="total-cell"><strong>11.08</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>7</strong></td>
                            <td class="state-cell"><strong>Madhya Pradesh</strong></td>
                            <td>5,723.77</td>
                            <td>3,448.15</td>
                            <td>123.71</td>
                            <td>155.46</td>
                            <td class="total-cell"><strong>9.45</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>8</strong></td>
                            <td class="state-cell"><strong>Telangana</strong></td>
                            <td>5,033.50</td>
                            <td>128.10</td>
                            <td>90.87</td>
                            <td>221.67</td>
                            <td class="total-cell"><strong>5.47</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>9</strong></td>
                            <td class="state-cell"><strong>Uttar Pradesh</strong></td>
                            <td>3,798.04</td>
                            <td>1,985.50</td>
                            <td>50.60</td>
                            <td>324.89</td>
                            <td class="total-cell"><strong>6.16</strong></td>
                        </tr>
                        <tr>
                            <td class="rank-cell"><strong>10</strong></td>
                            <td class="state-cell"><strong>Punjab</strong></td>
                            <td>4,679.10</td>
                            <td>4.50</td>
                            <td>299.86</td>
                            <td>396.50</td>
                            <td class="total-cell"><strong>5.38</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- CHARTS SECTION -->
    <section class="charts-section">
        <div class="container">
            <h2 class="section-title">📊 Visual Analytics</h2>
            
            <div class="charts-grid">
                <!-- Doughnut Chart -->
                <div class="chart-card">
                    <h3 class="chart-title">🥧 Renewable Energy Mix</h3>
                    <p class="chart-subtitle">Breakdown by source type</p>
                    <canvas id="mixChart"></canvas>
                </div>
                
                <!-- Bar Chart -->
                <div class="chart-card chart-wide">
                    <h3 class="chart-title">📊 Top 10 States Comparison</h3>
                    <p class="chart-subtitle">Stacked capacity by energy source</p>
                    <canvas id="statesChart"></canvas>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-logo">
                    <div class="logo-icon">🌱</div>
                    <h3>SwitchGreen</h3>
                </div>
                <p class="footer-text">© 2025 SwitchGreen | Computer Engineering Microproject</p>
                <p class="footer-source">Data Source: Ministry of New & Renewable Energy (MNRE)</p>
                <p class="footer-date">Last Updated: <strong>October 31, 2025</strong></p>
                <p class="footer-team">Team: Veer Doshi • Krish Dhokia • Aryan Faliya • Gagan Gowda</p>
            </div>
        </div>
    </footer>

    <!-- SCRIPTS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
    <script src="js/mnreData2025.js"></script>
    <script src="js/Data.js"></script>

</body>
</html>
