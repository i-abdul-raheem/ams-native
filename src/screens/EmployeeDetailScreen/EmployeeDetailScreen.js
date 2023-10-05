/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {DatePickerInput} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getEmployee } from '../../api/employee';

const Data = [
  {
    day: 'Monday',
    date: '08-02-2023',
    checkIn: '09:00 AM',
    checkOut: '05:00 PM',
  },
  {
    day: 'Tuesday',
    date: '08-03-2023',
    checkIn: '08:30 AM',
    checkOut: '04:30 PM',
  },
  {
    day: 'Wednesday',
    date: '08-04-2023',
    checkIn: '09:15 AM',
    checkOut: '05:15 PM',
  },
  // Add more entries as needed
];

const TableHeader = () => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.headerCell}>Day</Text>
      <Text style={styles.headerCell}>Date</Text>
      <Text style={styles.headerCell}>Check In</Text>
      <Text style={styles.headerCell}>Check Out</Text>
    </View>
  );
};
const TableRow = ({checkIn, checkOut, day, date, index}) => {
  return (
    <View
      style={[
        styles.tableRow,
        index % 2 === 0 ? styles.evenRow : styles.oddRow,
      ]}>
      <Text style={styles.cell}>{day}</Text>
      <Text style={styles.cell}>{date}</Text>
      <Text style={styles.cell}>{checkIn}</Text>
      <Text style={styles.cell}>{checkOut}</Text>
    </View>
  );
};

export const EmployeeDetailScreen = ({empId, empName, empDept}) => {
  const [user, setUser]= useState({});
  const [employee, setEmployee] = useState({});
  useEffect(()=>{
    async function fetchData(){
      await getData('@ams-user');
    }
    const res=fetchData();
    console.log(res, 'res 2');

    
  },[]);

  useEffect(() => {
    console.log(user, 'user 1');
    if (user?.id) {
      getEmployee(user?.id)
        .then(res => {
          if (res && res?.data) {
            console.log(res, 'res 3');
            setEmployee(res?.data?.employeeId);
            return;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [user]);

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // Data found
        console.log(value);
        let res = JSON.parse(value);
        setUser(res);
        // return res;
      }
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };
  return (
    <SafeAreaView style={{paddingHorizontal: 16, paddingVertical: 16}}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          {console.log(employee, 'employee')}
          <Text style={styles.label}>Employee ID:</Text>
          <Text style={styles.value}>{employee?._id || "Not Found"}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{employee?.firstName || "Not Found"}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Dept:</Text>
          <Text style={styles.value}>{employee?.dept || "Not Found"}</Text>
        </View>
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.datesFilter}>
          <DatePickerInput />
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => console.log('Pressed')}>
            <Text style={{color: 'white'}}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <TableHeader />
        {Data?.map((rowData, index) => (
          <TableRow key={index} index={index} {...rowData} />
        ))}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    padding: 8,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
    color: 'black',
  },
  value: {
    flex: 1,
    color: 'black',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerCell: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'left',
  },
  evenRow: {
    backgroundColor: '#313030',
  },
  oddRow: {
    backgroundColor: '#868181',
  },
  filterContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
  },
  datesFilter: {
    marginBottom: 16,
    alignItems: 'center',
  },

  tableContainer: {
    marginVertical: 16,
  },
  filterButton: {
    height: 50,
    width: 100,
    backgroundColor: '#316fe4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
