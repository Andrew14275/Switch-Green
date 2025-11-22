// ============================================
// MNRE OFFICIAL DATA - OCTOBER 2025
// Source: Ministry of New & Renewable Energy
// Last Updated: October 31, 2025
// ============================================

function getOfficialMNREData() {
    return {
        lastUpdated: "October 31, 2025",
        totalCapacity: 200.30, // GW
        
        // Breakdown by source
        bySource: {
            solar: 129.92,
            wind: 53.60,
            smallHydro: 5.16,
            biomass: 11.61
        },
        
        // Top 10 States
        topStates: [
            {
                rank: 1,
                name: "Rajasthan",
                solar: 35337.88,
                wind: 5208.75,
                hydro: 23.85,
                biomass: 207.52,
                total: 40778.00
            },
            {
                rank: 2,
                name: "Gujarat",
                solar: 24143.16,
                wind: 14493.38,
                hydro: 113.30,
                biomass: 129.85,
                total: 38879.69
            },
            {
                rank: 3,
                name: "Maharashtra",
                solar: 16137.25,
                wind: 5716.31,
                hydro: 384.28,
                biomass: 2998.30,
                total: 25236.14
            },
            {
                rank: 4,
                name: "Tamil Nadu",
                solar: 11471.94,
                wind: 11938.34,
                hydro: 123.05,
                biomass: 1046.62,
                total: 24579.95
            },
            {
                rank: 5,
                name: "Karnataka",
                solar: 10592.12,
                wind: 8193.29,
                hydro: 1284.73,
                biomass: 1916.05,
                total: 21986.19
            },
            {
                rank: 6,
                name: "Andhra Pradesh",
                solar: 5925.61,
                wind: 4397.78,
                hydro: 163.31,
                biomass: 594.02,
                total: 11080.72
            },
            {
                rank: 7,
                name: "Madhya Pradesh",
                solar: 5723.77,
                wind: 3448.15,
                hydro: 123.71,
                biomass: 155.46,
                total: 9451.09
            },
            {
                rank: 8,
                name: "Uttar Pradesh",
                solar: 3798.04,
                wind: 1985.50,
                hydro: 50.60,
                biomass: 324.89,
                total: 6159.03
            },
            {
                rank: 9,
                name: "Telangana",
                solar: 5033.50,
                wind: 128.10,
                hydro: 90.87,
                biomass: 221.67,
                total: 5474.14
            },
            {
                rank: 10,
                name: "Punjab",
                solar: 4679.10,
                wind: 4.50,
                hydro: 299.86,
                biomass: 396.50,
                total: 5379.96
            }
        ],
        
        // All 37 States/UTs
        allStates: [
            { rank: 1, name: "Rajasthan", solar: 35337.88, wind: 5208.75, hydro: 23.85, biomass: 207.52, total: 40778.00 },
            { rank: 2, name: "Gujarat", solar: 24143.16, wind: 14493.38, hydro: 113.30, biomass: 129.85, total: 38879.69 },
            { rank: 3, name: "Maharashtra", solar: 16137.25, wind: 5716.31, hydro: 384.28, biomass: 2998.30, total: 25236.14 },
            { rank: 4, name: "Tamil Nadu", solar: 11471.94, wind: 11938.34, hydro: 123.05, biomass: 1046.62, total: 24579.95 },
            { rank: 5, name: "Karnataka", solar: 10592.12, wind: 8193.29, hydro: 1284.73, biomass: 1916.05, total: 21986.19 },
            { rank: 6, name: "Andhra Pradesh", solar: 5925.61, wind: 4397.78, hydro: 163.31, biomass: 594.02, total: 11080.72 },
            { rank: 7, name: "Madhya Pradesh", solar: 5723.77, wind: 3448.15, hydro: 123.71, biomass: 155.46, total: 9451.09 },
            { rank: 8, name: "Uttar Pradesh", solar: 3798.04, wind: 1985.50, hydro: 50.60, biomass: 324.89, total: 6159.03 },
            { rank: 9, name: "Telangana", solar: 5033.50, wind: 128.10, hydro: 90.87, biomass: 221.67, total: 5474.14 },
            { rank: 10, name: "Punjab", solar: 4679.10, wind: 4.50, hydro: 299.86, biomass: 396.50, total: 5379.96 },
            { rank: 11, name: "Haryana", solar: 2786.14, wind: 82.50, hydro: 107.50, biomass: 161.41, total: 3137.55 },
            { rank: 12, name: "Chhattisgarh", solar: 1830.53, wind: 0.00, hydro: 169.90, biomass: 273.00, total: 2273.43 },
            { rank: 13, name: "Odisha", solar: 803.41, wind: 0.00, hydro: 391.25, biomass: 113.19, total: 1307.85 },
            { rank: 14, name: "Kerala", solar: 438.86, wind: 62.50, hydro: 502.15, biomass: 86.45, total: 1089.96 },
            { rank: 15, name: "West Bengal", solar: 491.80, wind: 0.00, hydro: 181.29, biomass: 282.44, total: 955.53 },
            { rank: 16, name: "Uttarakhand", solar: 276.49, wind: 0.00, hydro: 404.92, biomass: 75.99, total: 757.40 },
            { rank: 17, name: "Bihar", solar: 478.12, wind: 0.00, hydro: 43.90, biomass: 175.94, total: 697.96 },
            { rank: 18, name: "Jharkhand", solar: 308.94, wind: 0.00, hydro: 155.88, biomass: 23.50, total: 488.32 },
            { rank: 19, name: "Himachal Pradesh", solar: 67.89, wind: 0.00, hydro: 308.45, biomass: 0.00, total: 376.34 },
            { rank: 20, name: "Delhi", solar: 366.29, wind: 0.00, hydro: 0.00, biomass: 41.90, total: 408.19 },
            { rank: 21, name: "Jammu & Kashmir", solar: 159.71, wind: 0.00, hydro: 168.90, biomass: 0.00, total: 328.61 },
            { rank: 22, name: "Assam", solar: 52.73, wind: 0.00, hydro: 99.70, biomass: 136.95, total: 289.38 },
            { rank: 23, name: "Goa", solar: 165.78, wind: 0.00, hydro: 0.00, biomass: 0.00, total: 165.78 },
            { rank: 24, name: "Puducherry", solar: 77.55, wind: 0.00, hydro: 0.00, biomass: 0.00, total: 77.55 },
            { rank: 25, name: "Meghalaya", solar: 3.84, wind: 0.00, hydro: 70.90, biomass: 0.00, total: 74.74 },
            { rank: 26, name: "Manipur", solar: 9.02, wind: 0.00, hydro: 47.45, biomass: 0.00, total: 56.47 },
            { rank: 27, name: "Tripura", solar: 27.73, wind: 0.00, hydro: 16.95, biomass: 0.00, total: 44.68 },
            { rank: 28, name: "Sikkim", solar: 0.17, wind: 0.00, hydro: 38.50, biomass: 0.00, total: 38.67 },
            { rank: 29, name: "Chandigarh", solar: 35.91, wind: 0.00, hydro: 0.00, biomass: 0.00, total: 35.91 },
            { rank: 30, name: "Arunachal Pradesh", solar: 4.40, wind: 0.00, hydro: 28.45, biomass: 0.00, total: 32.85 },
            { rank: 31, name: "Nagaland", solar: 7.10, wind: 0.00, hydro: 13.80, biomass: 0.00, total: 20.90 },
            { rank: 32, name: "Ladakh", solar: 17.35, wind: 0.00, hydro: 0.00, biomass: 0.00, total: 17.35 },
            { rank: 33, name: "Mizoram", solar: 3.85, wind: 0.00, hydro: 7.95, biomass: 0.00, total: 11.80 },
            { rank: 34, name: "Andaman & Nicobar", solar: 6.10, wind: 0.00, hydro: 0.00, biomass: 0.00, total: 6.10 },
            { rank: 35, name: "Dadra & Nagar Haveli", solar: 5.45, wind: 0.00, hydro: 0.00, biomass: 0.00, total: 5.45 },
            { rank: 36, name: "Daman & Diu", solar: 5.18, wind: 0.00, hydro: 0.00, biomass: 0.00, total: 5.18 },
            { rank: 37, name: "Lakshadweep", solar: 0.52, wind: 0.00, hydro: 0.00, biomass: 0.00, total: 0.52 }
        ],
        
        // AQI Data (October 2025)
        aqiData: [
            { city: "Delhi", aqi: 287, status: "Poor", improvement: 12 },
            { city: "Mumbai", aqi: 156, status: "Moderate", improvement: 18 },
            { city: "Bengaluru", aqi: 98, status: "Satisfactory", improvement: 22 },
            { city: "Chennai", aqi: 112, status: "Moderate", improvement: 16 }
        ],
        
        // Progress toward 500 GW goal
        goal: {
            target: 500,
            current: 200.30,
            percentage: 40.06,
            remaining: 299.70
        }
    };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getOfficialMNREData };
}
