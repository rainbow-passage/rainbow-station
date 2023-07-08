import { Employee } from "~/models/Employees.model";}

export const getEmployees = async (params: any): Promise<Employee[]> => {
  return await Employee.findAll(params);
};

export const getEmployeeById = async (id: number): Promise<Employee | null> => {
  return await Employee.findByPk(id);
};

export const createEmployee = async (data: Employee): Promise<Employee> => {
  return await Employee.create(data);
};

export const updateEmployee = async (id: number, data: Partial<Employee>): Promise<[number, Employee[]]> => {
  return await Employee.update(data, {
    where: { id },
    returning: true,
  });
};

export const deleteEmployee = async (id: number): Promise<number> => {
  return await Employee.destroy({
    where: { id },
  });
}; Employee