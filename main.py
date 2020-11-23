from stats import covid as sc


def main():
    covid = sc.CovidStats()
    total = covid.total_cases()
    deaths = covid.total_deaths()
    recovered = covid.total_recovered()
    print('Total cases: {:,}'.format(total))
    print('Total deaths: {:,} ({:.2f}%)'.format(deaths, (deaths/total)*100))
    print('Total recovered: {:,} ({:.2f}%)'.format(recovered, (recovered/total)*100))
    print('Currently Infected: {:,}'.format(total - recovered - deaths))


if __name__ == '__main__':
    main()
