function getEmployeeStatistics(dtoOut) {

    const statistics = [];

    const totalWorkload = dtoOut.reduce((sum, employee) => sum + employee.workload, 0);
    const averageWorkload = totalWorkload / dtoOut.length;
    
    const employeesCount = dtoOut.length;

    const statisticsData = {
        averageWorkload: averageWorkload,
        employeesCount: employeesCount
    };

    statistics.push(statisticsData)
    return statistics;

};

window.employeeAnalyzer = { getEmployeeStatistics };